import fs from "fs";
import path from "path";
import getCombinedData from "../lib/combineAffiliation.mjs";
import sailthruVariables from "../lib/sailthruVariables.mjs";

export default function createLoaderFile(location = "build/data") {
	getCombinedData().then((data) => {
		const minifiedJson = "{data = " + JSON.stringify(data) + "}";
		const distPath = path.join(location, "dataLoader.min.json");
		let combineData = minifiedJson + sailthruVariables;

		fs.mkdirSync(location, { recursive: true });

		fs.writeFile(distPath, combineData, (err) => {
			if (err) throw err;
			console.log("HTML Content data written to:", distPath);
		});
	});
}
