import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";
import sortObject from "../lib/sortObject.mjs";

const require = createRequire(import.meta.url);

function toJS(object) {
	return `const data = ${sortObject(object)};\n\nmodule.exports = data;`;
}

function createSailthruSigVariable(sig) {
	const __dirname = path.dirname(fileURLToPath(import.meta.url));
	const filePath = path.join(__dirname, "../lib/sailthruVariables.mjs");

	let sailthruVariables = fs.readFileSync(filePath, "utf8");

	const sailthruSignatureVariables = `
{${sig}_name = data[affiliation]['signatures']['${sig}']['name']}
{${sig}_title = data[affiliation]['signatures']['${sig}']['title']}
{${sig}_pronouns = data[affiliation]['signatures']['${sig}']['pronouns']}
{${sig}_headshot = data[affiliation]['signatures']['${sig}']['headshot']}
`;

	sailthruVariables = sailthruVariables.replace("`;\n\nexport default sailthruVariables;", sailthruSignatureVariables + "`;\n\nexport default sailthruVariables;");

	fs.writeFileSync(filePath, sailthruVariables);
}

export default function addNewSignature(name) {
	if (!name) {
		console.error("Name is required");
		return;
	}

	const __dirname = path.dirname(fileURLToPath(import.meta.url));
	const directory = path.join(__dirname, "../../src/_data/affiliations");
	const files = fs.readdirSync(directory);

	createSailthruSigVariable(name);

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
			title: "",
			name: "",
			pronouns: "",
			headshot: "",
		};

		fs.writeFileSync(filePath, toJS(data));
	}
}
