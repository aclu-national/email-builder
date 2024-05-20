import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import inquirer from "inquirer";
import util from "util";
import updateDataFile from "../lib/updateDataFile.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const affiliationsDir = path.join(__dirname, "../../src/_data/affiliations");

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
							when: (answers2) => !options.value && answers2.key !== "signatures",
						},
					])
					.then((answers2) => {
						const key = options.key || answers2.key;
						const value = options.value || answers2.value;

						if (key === "signatures") {
							const signatureKeys = Object.keys(content.default.signatures);

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
									const signatureProperties = Object.keys(content.default.signatures[answers3.signatureKey]);

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
											updateDataFile(affiliation, `signatures.${answers3.signatureKey}.${answers4.signatureProperty}`, answers4.value);
										});
								});
						} else {
							updateDataFile(affiliation, key, value);
						}
					});
			});
		});
}
