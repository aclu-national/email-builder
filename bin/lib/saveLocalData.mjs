import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import getCombinedData from "./combineAffiliation.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default function saveCombinedData(name = "dataLoader") {
	getCombinedData().then((data) => {
		const savePath = path.join(__dirname, `../../src/_data/${name}.json`);
		fs.writeFileSync(savePath, JSON.stringify(data, null, 2));
		console.log("Data saved to", savePath);
	});
}
