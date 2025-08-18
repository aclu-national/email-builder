import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";
import sortObject from "../lib/sortObject.mjs";

const require = createRequire(import.meta.url);

function toJS(object) {
  return `const data = ${sortObject(object)};\n\nmodule.exports = data;`;
}

/**
 * Deep clone a value (object or array) to avoid shared references
 */
function deepClone(value) {
  if (value === null || typeof value !== "object") return value;
  return Array.isArray(value)
    ? value.map(deepClone)
    : Object.fromEntries(Object.entries(value).map(([k, v]) => [k, deepClone(v)]));
}

/**
 * Add a new key to the data object in all affiliation files.
 * @param {string[]} pathKeys - Path to the key as array of nested keys. Example: ["social", "linkedin"]
 * @param {any} defaultValue - Value to assign to the new key
**/
export default function addNewDataVariable(pathKeys, defaultValue = "") {
  if (!Array.isArray(pathKeys) || pathKeys.length === 0) {
    console.error("Path to key must be a non-empty array");
    return;
  }

  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const directory = path.join(__dirname, "../../src/_data/affiliations");

  if (!fs.existsSync(directory)) {
    console.error("Directory does not exist:", directory);
    return;
  }

  const files = fs.readdirSync(directory);

  for (const file of files) {
    const filePath = path.join(directory, file);

    let data;
    try {
      data = require(filePath);
    } catch (err) {
      console.error("Failed to import module:", filePath, err);
      continue;
    }

    let current = data;
    const lastKey = pathKeys[pathKeys.length - 1];

    // Traverse the path and create objects if needed
    for (let i = 0; i < pathKeys.length - 1; i++) {
      const key = pathKeys[i];
      if (!current[key] || typeof current[key] !== "object") {
        current[key] = {};
      }
      current = current[key];
    }

    // Add the new key if it doesn't exist
    if (!current.hasOwnProperty(lastKey)) {
      current[lastKey] = deepClone(defaultValue);
      console.log(`Added key '${pathKeys.join(".")}' to ${file}`);
    } else {
      console.log(`Key '${pathKeys.join(".")}' already exists in ${file}`);
    }

    fs.writeFileSync(filePath, toJS(data));
  }
}

/* ---------------- CLI wrapper ---------------- */

if (process.argv.length > 2) {
  const [,, pathString, defaultValue] = process.argv;
  if (!pathString) {
    console.error("Usage: node addNewDataVariable.js path.to.key [defaultValue]");
    process.exit(1);
  }
  const pathKeys = pathString.split(".");
  addNewDataVariable(pathKeys, defaultValue ?? "");
}
