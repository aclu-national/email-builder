import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

function stringifyObject(obj, indent = "  ") {
	const isArray = Array.isArray(obj);
	const entries = Object.entries(obj).map(([key, value]) => {
		key = isArray ? "" : key + ": ";
		if (value && typeof value === "object") {
			value = stringifyObject(value, indent + "  ");
		} else if (typeof value === "string") {
			value = `'${value}'`;
		}
		return indent + key + value;
	});
	const start = isArray ? "[" : "{";
	const end = isArray ? "]" : "}";
	return `${start}\n${entries.join(",\n")}\n${indent.slice(2)}${end}`;
}

function toJS(object) {
	return `const data = ${stringifyObject(object)};\n\nmodule.exports = data;`;
}

export default function addNewSignature(name) {
	if (!name) {
		console.error("Name is required");
		return;
	}

	const __dirname = path.dirname(fileURLToPath(import.meta.url));
	const directory = path.join(__dirname, "../../src/_data/affiliations");
	const files = fs.readdirSync(directory);

	for (const file of files) {
		const filePath = path.join(directory, file);
		let data;
		try {
			data = require(filePath);
		} catch (err) {
			console.error("Failed to import module", err);
			continue;
		}

		if (!data.signatures) {
			data.signatures = {};
		}

		data.signatures[name] = {
			title: "Organizing Director",
			name: "",
			pronouns: "",
			headshot: "",
		};

		fs.writeFileSync(filePath, toJS(data));
	}
}
