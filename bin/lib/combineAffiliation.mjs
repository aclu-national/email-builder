import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const affiliationsDir = path.join(__dirname, "../../src/_data/affiliations");
const files = fs.readdirSync(affiliationsDir);

function getCombinedData() {
	let combinedData = {};

	const imports = files.map((file) => {
		const filePath = path.join(affiliationsDir, file);
		return import(filePath).then((data) => {
			const affiliation = path.basename(file, path.extname(file));
			combinedData[affiliation] = data.default;
		});
	});

	return Promise.all(imports).then(() => combinedData);
}

export default getCombinedData;
