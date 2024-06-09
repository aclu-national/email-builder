const theme = require("../src/_data/theme.json");

describe("Check theme.json file includes all keys...", () => {
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

	test("theme.json is an object", () => {
		expect(typeof theme).toBe("object");
	});

	test("all values are not empty", () => {
		checkValues(theme);
	});
});