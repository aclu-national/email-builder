const fs = require("fs");
const path = require("path");

const affiliationsDir = path.join(__dirname, "affiliations");
const files = fs.readdirSync(affiliationsDir);

let combinedData = {};

files.forEach((file) => {
	const filePath = path.join(affiliationsDir, file);
	const data = require(filePath);
	const affiliation = path.basename(file, path.extname(file)); // get filename without extension
	combinedData[affiliation] = data;
});

module.exports = combinedData;
