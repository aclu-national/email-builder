const config = require("../_data/config");

describe("Config Test", () => {
	test("keys are defined", () => {
		expect(config.author).not.toBe("");
		expect(config.description).not.toBe("");
		expect(config.environment).not.toBe("");
		expect(config.fbLogo).not.toBe("");
		expect(config.igLogo).not.toBe("");
		expect(config.logo).not.toBe("");
		expect(config.privacy).not.toBe("");
		expect(config.title).not.toBe("");
		expect(config.twitter).not.toBe("");
		expect(config.twLogo).not.toBe("");
		expect(config.unsub).not.toBe("");
		expect(config.url).not.toBe("");
	});

	test("config is an object", () => {
		expect(typeof config).toBe("object");
	});
});
