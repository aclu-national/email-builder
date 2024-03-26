// update.js
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { program } from "commander";
import inquirer from "inquirer";
import util from "util";

const __dirname = dirname(fileURLToPath(import.meta.url));
const affiliationsDir = path.join(__dirname, "../../src/_data/affiliations");

function updateFile(affiliation, key, value) {
	const filePath = path.join(affiliationsDir, `${affiliation}.js`);

	import(filePath).then((content) => {
		const keys = key.split(".");
		let target = content.default;

		for (let i = 0; i < keys.length - 1; i++) {
			if (keys[i] === "signatures") {
				target = target[keys[i]].find((obj) => Object.keys(obj).includes(keys[i + 1]))[keys[i + 1]];
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

export default function updateAffiliation(options = {}) {
	const files = fs.readdirSync(affiliationsDir);
	const affiliations = files.map((file) => path.basename(file, ".js"));

	inquirer
		.prompt([
			{
				type: "list",
				name: "affiliation",
				message: "Select the affiliation to update:",
				choices: affiliations,
				default: options.affiliation,
				when: () => !options.affiliation,
			},
		])
		.then((answers) => {
			const affiliation = options.affiliation || answers.affiliation;
			const filePath = path.join(affiliationsDir, `${affiliation}.js`);
			import(filePath).then((content) => {
				const keys = Object.keys(content.default);

				inquirer
					.prompt([
						{
							type: "list",
							name: "key",
							message: "Select the key to replace:",
							choices: keys,
							default: options.key,
							when: () => !options.key,
						},
						{
							type: "input",
							name: "value",
							message: "Enter the new value:",
							default: options.value,
							when: () => !options.value,
						},
					])
					.then((answers2) => {
						const key = options.key || answers2.key;
						const value = options.value || answers2.value;

						if (key === "signatures") {
							const signatureKeys = content.default.signatures.flatMap((obj) => Object.keys(obj));
							inquirer
								.prompt([
									{
										type: "list",
										name: "signatureKey",
										message: "Select the signature to replace:",
										choices: signatureKeys,
									},
								])
								.then((answers3) => {
									const signatureProperties = Object.keys(content.default.signatures.find((obj) => obj[answers3.signatureKey])[answers3.signatureKey]);
									inquirer
										.prompt([
											{
												type: "list",
												name: "signatureProperty",
												message: "Select the property to replace:",
												choices: signatureProperties,
											},
											{
												type: "input",
												name: "value",
												message: "Enter the new value:",
											},
										])
										.then((answers4) => {
											updateFile(affiliation, `signatures.${answers3.signatureKey}.${answers4.signatureProperty}`, answers4.value);
										});
								});
						} else {
							updateFile(affiliation, key, value);
						}
					});
			});
		});
}
