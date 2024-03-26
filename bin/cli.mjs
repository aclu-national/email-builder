#!/usr/bin/env node

import { program } from "commander";
import addNewAffiliation from "./lib/addNewAffiliation.mjs";
import saveLocalData from "./lib/saveLocalData.mjs";
import createDataLoader from "./lib/createDataLoader.mjs";
import updateAffiliation from "./lib/updateAffiliation.mjs";

program
	.command("add [name]")
	.description("Add a new affiliation")
	.action((name) => addNewAffiliation(name));

program
	.command("save [name]")
	.description("Create combine json data file")
	.action((name) => saveLocalData(name));

program
	.command("create")
	.description("Create data loader")
	.action(() => createDataLoader());

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
