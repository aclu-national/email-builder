import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import getCombinedData from "./combineAffiliation.mjs";
import sailthruVariables from "./sailthruVariables.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default function createLoaderFile() {
	getCombinedData().then((data) => {
		const minifiedJson = "{data = " + JSON.stringify(data) + "}";

		const distDir = path.resolve(__dirname, "../../dist/data");
		const distPath = path.join(distDir, "dataLoader.min.json");

		fs.mkdirSync(distDir, { recursive: true });

		let combineData = minifiedJson + sailthruVariables;

		fs.writeFile(distPath, combineData, (err) => {
			if (err) throw err;
			console.log("HTML Content data written to:", distPath);
		});
	});
}
