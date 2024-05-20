import fs from "fs";
import path from "path";
import getCombinedData from "../lib/combineAffiliation.mjs";

export default function saveCombinedData(name = "dataLoader", location = "src/_data") {
	getCombinedData().then((data) => {
		const savePath = path.join(location, `${name}.json`);
		const jsonData = JSON.stringify(data, null, 2);

		fs.mkdirSync(location, { recursive: true });

		fs.writeFileSync(savePath, jsonData);
		console.log("Data saved to", savePath);
	});
}
