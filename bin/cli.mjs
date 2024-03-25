#!/usr/bin/env node

import { program } from "commander";
import addNewAffiliation from "./lib/addNewAffiliation.mjs";
// import createDataLoader from "./createDataLoader.ts";
// import updateAffiliation from "./updateAffiliation.ts";
// import template from "./outputVariables.ts";

program
	.command("add [name]")
	.description("Add a new affiliation")
	.action((name) => addNewAffiliation(name));

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
