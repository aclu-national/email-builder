#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question("Enter the name of the new affiliation: ", (name) => {
	const dirPath = path.join(__dirname, "../_data/affiliations");
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

	fs.mkdirSync(dirPath, { recursive: true });

	fs.writeFile(filePath, template, (err) => {
		if (err) {
			console.error(`Error creating file: ${err}`);
		} else {
			console.log(`Created new affiliation file at ${filePath}`);
		}

		rl.close();
	});
});
