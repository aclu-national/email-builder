const config = require("../src/_data/config.js");

describe("Check the config.cjs file includes all keys...", () => {
	function checkValues(obj, path = "") {
		for (let key in obj) {
			const newPath = path ? `${path}.${key}` : key;
			if (typeof obj[key] === "object") {
				checkValues(obj[key], newPath);
			} else {
				expect.extend({
					toBeNonEmpty(value, received) {
						if (received !== "") {
							return {
								message: () => `expected '${value}' to be empty`,
								pass: true,
							};
						} else {
							return {
								message: () => `expected '${value}' not to be empty`,
								pass: false,
							};
						}
					},
				});
				expect(newPath).toBeNonEmpty(obj[key]);
			}
		}
	}

	test("config.cjs is an object", () => {
		expect(typeof config).toBe("object");
	});

	test("all values are not empty", () => {
		checkValues(config);
	});
});