import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function addNewAffiliation(names) {
	if (!names) {
		console.error("Names are required");
		return;
	}

	const dirPath = path.join(__dirname, "../../src/_data/affiliations");

	if (!fs.existsSync(dirPath)) {
		fs.mkdirSync(dirPath, { recursive: true });
	}

	const namesArray = names.includes(",") ? names.split(",") : [names];

	namesArray.forEach((name) => {
		const filePath = path.join(dirPath, `${name}.js`);

		const template = `const data = {
	address1: "",
	address2: "",
	affiliation_name: "",
	donation_url: "",
	facebook_url: "",
	instagram_url: "",
	logo_url: "",
	logo_width: "150",
	twitter_url: "",
	website_url: "",
	signatures: {
		ed: {
			title: "Executive Director",
			name: "",
			pronouns: "",
			headshot: "",
		},
		advo: {
			title: "Chief Political and Advocacy Officer",
			name: "",
			pronouns: "",
			headshot: "",
		},
		comms: {
			title: "Chief Communications and Marketing Officer",
			name: "",
			pronouns: "",
			headshot: "",
		},
		dev: {
			title: "Chief Development Officer",
			name: "",
			pronouns: "",
			headshot: "",
		},
		legal: {
			title: "Legal Director",
			name: "",
			pronouns: "",
			headshot: "",
		},
		custom1: {
			title: "",
			name: "",
			pronouns: "",
			headshot: "",
		},
		custom2: {
			title: "",
			name: "",
			pronouns: "",
			headshot: "",
		},
		custom3: {
			title: "",
			name: "",
			pronouns: "",
			headshot: "",
		},
	},
};

module.exports = data;
`;

		fs.writeFile(filePath, template, (err) => {
			if (err) {
				console.error(`Error creating file: ${err}`);
			} else {
				console.log(`Created new affiliation file at ${filePath}`);
			}
		});
	});
}

export default addNewAffiliation;
