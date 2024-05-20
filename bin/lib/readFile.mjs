import fs from "fs";

export default function readFile(path) {
	const data = fs.readFileSync(path, "utf8");
	return data;
}
