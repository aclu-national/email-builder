const fs = require("fs");
const path = require("path");
const combinedData = require("../_data/combineAffiliations");
const variables = require("./variables");

// const nat = require("../_data/affiliations/nat");
// const ak = require("../_data/affiliations/ak");
// const al = require("../_data/affiliations/al");
// const ar = require("../_data/affiliations/ar");
// const az = require("../_data/affiliations/az");
// const dc = require("../_data/affiliations/dc");

// const combinedData = {
// 	ak,
// 	al,
// 	ar,
// 	az,
// 	dc,
// 	nat,
// };

const minifiedJsonString = "{data = " + JSON.stringify(combinedData) + "}";

const distDir = path.resolve(__dirname, "..", "..", "dist", "data");
const minifiedDistPath = path.join(distDir, "dataLoader.min.json");

// Ensure the directory exists
fs.mkdirSync(distDir, { recursive: true });

let data = (minifiedJsonString + variables).replace(/\s/g, "");
fs.writeFile(minifiedDistPath, minifiedJsonString + variables, (err) => {
	if (err) throw err;
	console.log("Minified data written to file");
});

// console.log(data);
