const path = require("path");
const fs = require("fs");
const affiliationsDir = path.join(__dirname, "../src/_data/affiliations");

const requiredKeys = [
	"address1",
	"address2",
	"affiliation_name",
	"donation_url",
	"facebook_url",
	"instagram_url",
	"logo_url",
	"logo_width",
	"signatures.advo.title",
	"signatures.comms.title",
	"signatures.dev.title",
	"signatures.ed.title",
	"signatures.legal.title",
	"signatures.org.title",
	];

const expectedTitles = {
	"signatures.ed.title": [
		"Acting Executive Director",
		"Deputy Executive Director",
		"Executive Director",
		"Interim Executive Director",
	],

	"signatures.advo.title": [
		"Advocacy and Legal Director",
		"Advocacy and Policy Director",
		"Advocacy Director",
		"Advocacy Manager",
		"Advocacy, Policy, and Organizing Director",
		"Chief Legal and Advocacy Officer",
		"Chief Political and Advocacy Director",
		"Chief Political and Advocacy Officer",
		"Chief Political Officer",
		"Co-Director of Policy and Advocacy",
		"Director of Advocacy and Intergovernmental Affairs",
		"Director of Advocacy",
		"Director of Legal Policy",
		"Director of Policy and Advocacy",
		"Director of Policy and Research",
		"Director of Policy",
		"Director of Program and Strategy",
		"Director of Public Policy",
		"Interim Advocacy Director",
		"Interim Director of Advocacy and Strategic Alliances",
		"Organizing and Political Director",
		"Policy Advocacy Director",
		"Policy and Advocacy Director",
		"Policy Director",
		"Political and Advocacy Director",
		"Political Director",
		"Public Policy Director",
	],

	"signatures.comms.title": [
		"Chief Communications and Marketing Officer",
		"Chief Communications and Marketing Officer",
		"Chief Communications Officer",
		"Communications and Storytelling Director",
		"Communications Director",
		"Deputy Director of Communications",
		"Director of Communications and Campaigns",
		"Director of Communications and Community Engagement",
		"Director of Communications and Public Education",
		"Director of Communications and Public Policy",
		"Director of Communications, Program and Strategy",
		"Director of Communications",
		"Director of Communications",
		"Director of Policy and Communications",
		"Interim Director of Communications",
		"Strategic Communications Director",
	],

	"signatures.dev.title": [
		"Chief Development Officer",
		"Development Director",
		"Director of Development",
		"Director of Philanthropy and Engagement",
		"Director of Philanthropy",
	],

	"signatures.legal.title": [
		"Advocacy and Legal Director",
		"Chief Legal and Advocacy Officer",
		"Interim Legal Director",
		"Legal Director",
		"Staff Attorney",
	],

	"signatures.org.title": [
		"Advocacy and Outreach Manager",
		"Advocacy, Policy, and Organizing Director",
		"Community Engagement Director",
		"Community Outreach Director",
		"Co-Director of Policy and Advocacy",
		"Director of Community Engagement",
		"Director of Organizing",
		"Field Director",
		"Organizing and Political Director",
		"Organizing Director",
		"Organizing Manager",
	],
};

const expectedSignatureKeys = [
	"advo",
	"comms",
	"custom1",
	"custom2",
	"custom3",
	"dev",
	"ed",
	"legal",
	"org"
];

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

	describe(`Checking data file ${file}...`, () => {
		const { undefinedKeys, unexpectedTitles } = checkValues(data, "", requiredKeys, expectedTitles, (newPath, value) => `title '${value}' matches expected value`, true);

		test("data is an object", () => {
			expect(typeof data).toBe("object");
		});

		test("required keys are defined", () => {
			expect(undefinedKeys).toEqual([]);
		});

		test("titles match expected values", () => {
			if (unexpectedTitles.length > 0) {
				unexpectedTitles.forEach((unexpectedTitle) => {
					expect(expectedTitles[unexpectedTitle.path]).toContain(
						unexpectedTitle.value
					);
				});
			} else {
				expect(true).toBe(true);
			}
		});

		test("url protocols start with https", () => {
			const urlKeys = Object.keys(data).filter(key => key.endsWith('_url'));

			urlKeys.forEach((key) => {
				expect(data[key]).toContain('https://');
			});
		});

		describe("check donation url date", () => {
    test("donation_url contains current year followed by 'XXXX'", () => {
        const currentYear = new Date().getFullYear().toString().slice(2); // Get the last two digits of the current year
        const pattern = new RegExp(currentYear + 'XXXX', 'g');
        const matches = data.donation_url.match(pattern);
        expect(matches).not.toBeNull();
    });
});

	});
});
