const fs = require("fs");
const path = require("path");
const combinedData = require("../_data/combineAffiliations");
const variables = require("./outputVariables");

const minifiedJsonString = "{data = " + JSON.stringify(combinedData) + "}";

const distDir = path.resolve(__dirname, "..", "..", "dist", "data");
const minifiedDistPath = path.join(distDir, "dataLoader.min.json");

// Ensure the directory exists
fs.mkdirSync(distDir, { recursive: true });

let data = (minifiedJsonString + variables).replace(/\s/g, "");
// console.log(data);

fs.writeFile(minifiedDistPath, minifiedJsonString + variables, (err) => {
	if (err) throw err;
	console.log("Minified data written to file");
});


