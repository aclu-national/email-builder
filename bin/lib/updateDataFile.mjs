// update.js
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import util from "util";

const __dirname = dirname(fileURLToPath(import.meta.url));
const affiliationsDir = path.join(__dirname, "../../src/_data/affiliations");

export default function updateFile(affiliation, key, value) {
	const filePath = path.join(affiliationsDir, `${affiliation}.js`);

	import(filePath).then((content) => {
		const keys = key.split(".");
		let target = content.default;

		for (let i = 0; i < keys.length - 1; i++) {
			if (keys[i] === "signatures") {
				target = target[keys[i]][keys[i + 1]];
				i++;
			} else {
				target = target[keys[i]];
			}
		}

		target[keys[keys.length - 1]] = value;

		const output = `const data = ${util.inspect(content.default, { depth: null })};\n\nmodule.exports = data;`;

		fs.writeFile(filePath, output, (err) => {
			if (err) {
				console.error(`Error writing file: ${err}`);
			} else {
				console.log(`\nUpdated affiliation file at ${filePath}`);
			}
		});
	});
}
