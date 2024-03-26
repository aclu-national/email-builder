// update.js
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { program } from "commander";
import inquirer from "inquirer";
import util from "util";

const __dirname = dirname(fileURLToPath(import.meta.url));

function updateFile(affiliation, key, value) {
	const filePath = path.join(__dirname, "../../src/_data/affiliations", `${affiliation}.js`);

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

export default function updateAffiliation(options) {
	if (options && options.affiliation && options.key && options.value) {
		updateFile(options.affiliation, options.key, options.value);
		return;
	}

	inquirer
		.prompt([
			{
				type: "input",
				name: "affiliation",
				message: "Enter the name of the affiliation to update:",
			},
		])
		.then((answers) => {
			const filePath = path.join(__dirname, "../../src/_data/affiliations", `${answers.affiliation}.js`);
			import(filePath).then((content) => {
				// Get the keys
				const keys = Object.keys(content.default);

				inquirer
					.prompt([
						{
							type: "list",
							name: "key",
							message: "Select the key to replace:",
							choices: keys,
						},
					])
					.then((answers2) => {
						if (answers2.key === "signatures") {
							// If the selected key is 'signatures', prompt the user to select a key from the 'signatures' object
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
											updateFile(answers.affiliation, `signatures.${answers3.signatureKey}.${answers4.signatureProperty}`, answers4.value);
										});
								});
						} else {
							inquirer
								.prompt([
									{
										type: "input",
										name: "value",
										message: "Enter the new value:",
									},
								])
								.then((answers3) => {
									updateFile(answers.affiliation, answers2.key, answers3.value);
								});
						}
					});
			});
		});
}
