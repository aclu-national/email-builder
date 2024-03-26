#!/usr/bin/env node

import { program } from "commander";
import addNewAffiliation from "./lib/addNewAffiliation.mjs";
import saveLocalData from "./lib/saveLocalData.mjs";
// import createDataLoader from "./lib/createDataLoader.mjs";
// import updateAffiliation from "./updateAffiliation.ts";
// import template from "./outputVariables.ts";

program
	.command("add [name]")
	.description("Add a new affiliation")
	.action((name) => addNewAffiliation(name));

program
	.command("save [name]")
	.description("Create combine json data file")
	.action((name) => saveLocalData(name));

// program
// 	.command("create")
// 	.description("Create data loader")
// 	.action(() => createDataLoader());

// program
// 	.command("print-template")
// 	.description("Print the template")
// 	.action(() => {
// 		console.log(template);
// 		process.exit(0);
// 	});

// program
// 	.command("update <affiliation> <key> <value>")
// 	.description("Update an affiliation")
// 	.action((affiliation, key, value) => updateAffiliation(affiliation, key, value));

program.parse(process.argv);
