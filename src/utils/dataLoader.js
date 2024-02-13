const fs = require("fs");
const path = require("path");
const NAT = require("./Affiliates/nat");
const DC = require("./Affiliates/dc");
const NY = require("./Affiliates/ny");

const combinedData = {
	NAT,
	DC,
	// NY,
};

const jsonString = JSON.stringify(combinedData, null, 2);

console.log(jsonString);

const minifiedJsonString = JSON.stringify(combinedData);

const distDir = path.resolve(__dirname, "..", "..", "dist", "data");
const distPath = path.join(distDir, "dataLoader.json");
const minifiedDistPath = path.join(distDir, "dataLoader.min.json");

// Ensure the directory exists
fs.mkdirSync(distDir, { recursive: true });

fs.writeFile(distPath, jsonString, (err) => {
	if (err) throw err;
	console.log("Data written to file");
});

fs.writeFile(minifiedDistPath, minifiedJsonString, (err) => {
	if (err) throw err;
	console.log("Minified data written to file");
});

// {
// 	affiliate_code = lower(split(blast.name, " ")[1]);
// }

// {
// 	affiliate_name = affiliates[affiliate_code]["affiliate_name"];
// }

// {
// 	affiliate_website = affiliates[affiliate_code]["website"];
// }
