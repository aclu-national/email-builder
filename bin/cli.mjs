#!/usr/bin/env node

import { program } from "commander";
import addNewAffiliation from "./commands/addNewAffiliation.mjs";
import addNewSignature from "./commands/addNewSignature.mjs";
import saveLocalData from "./commands/saveLocalData.mjs";
import createDataLoader from "./commands/createDataLoader.mjs";
import updateAffiliation from "./commands/updateAffiliation.mjs";
import addNewDataVariable from "./commands/addNewDataVariable.mjs";

program
	.command("add [name]")
	.description("Add a new affiliation")
	.action((name) => addNewAffiliation(name));

program
	.command("signature [name]")
	.description("Create new signature object")
	.action((name) => addNewSignature(name));

program
	.command("var [key]")
	.description("Create new variable key")
	.action((key) => addNewDataVariable(key));

program
	.command("save [name]")
	.description("Create local json data file")
	.option("-l, --location <path>", "location to save the file")
	.action((name, cmdObj) => {
		const location = cmdObj.location;
		saveLocalData(name, location);
	});

program
	.command("create [location]")
	.description("Create Sailthru data loader file")
	.action((location) => createDataLoader(location));

program
	.command("update [options...]")
	.description("Update the value for a key")
	.option("-a, --affiliation <type>", "affiliation name")
	.option("-k, --key <type>", "key to replace")
	.option("-v, --value <type>", "new value")
	.action((optionsArgs, cmdObj) => {
		const options = {
			affiliation: cmdObj.affiliation,
			key: cmdObj.key,
			value: cmdObj.value,
		};
		updateAffiliation(options);
	});

program.parse(process.argv);
