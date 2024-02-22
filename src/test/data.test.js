const path = require("path");
const fs = require("fs");
const affiliationsDir = path.join(__dirname, "../_data/affiliations");

const requiredKeys = ["address1", "address2", "affiliation_name", "donation_url", "facebook_url", "instagram_url", "logo_url", "logo_width", "signatures.ed.title", "signatures.advo.title", "signatures.comms.title", "signatures.dev.title", "signatures.legal.title"];

const expectedTitles = {
	"signatures.ed.title": ["Executive Director"],

	"signatures.advo.title": ["Chief Political Officer", "Advocacy Director", "Policy Director", "Chief Political and Advocacy Officer", "Advocacy & Legal Director", "Political & Advocacy Director"],

	"signatures.comms.title": ["Chief Communications Officer", "Communications Director", "Strategic Communications Director", "Chief Communications and Marketing Officer", "Director of Communications & Public Education"],

	"signatures.dev.title": ["Chief Development Officer", "Director of Development", "Development Director", "Director of Philanthropy"],

	"signatures.legal.title": ["Legal Director"],
};

const expectedSignatureKeys = ["ed", "advo", "comms", "dev", "legal", "custom1", "custom2", "custom3"];

function checkValues(obj, path = "", keys, expectedValues = {}, message, checkTitles = false) {
	let undefinedKeys = [];
	let unexpectedTitles = [];
	for (let key in obj) {
		const newPath = path ? `${path}.${key}` : key;
		if (obj[key] !== null && typeof obj[key] === "object") {
			const results = checkValues(obj[key], newPath, keys, expectedValues, message, checkTitles);
			undefinedKeys = undefinedKeys.concat(results.undefinedKeys);
			unexpectedTitles = unexpectedTitles.concat(results.unexpectedTitles);
		} else if (keys.includes(newPath)) {
			if (checkTitles && expectedValues[newPath] && !expectedValues[newPath].includes(obj[key])) {
				unexpectedTitles.push({ path: newPath, value: obj[key] });
			} else if (obj[key] === "") {
				undefinedKeys.push(newPath);
			}
		}
	}
	return { undefinedKeys, unexpectedTitles };
}

fs.readdirSync(affiliationsDir).forEach((file) => {
	const data = require(path.join(affiliationsDir, file));

	describe(`Check data for file ${file}...`, () => {
		const { undefinedKeys, unexpectedTitles } = checkValues(data, "", requiredKeys, expectedTitles, (newPath, value) => `title '${value}' matches expected value`, true);

		test("required keys are defined", () => {
			expect(undefinedKeys).toEqual([]);
		});

		test("signatures is an object", () => {
			expect(typeof data.signatures).toBe("object");
		});

		test("signatures keys match expected keys", () => {
			const signatureKeys = Object.keys(data.signatures);
			expect(signatureKeys.sort()).toEqual(expectedSignatureKeys.sort());
		});

		if (unexpectedTitles.length > 0) {
			test.each(unexpectedTitles)("titles match expected values", (unexpectedTitle) => {
				expect(expectedTitles[unexpectedTitle.path]).toContain(unexpectedTitle.value);
			});
		}
	});
});
