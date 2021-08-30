tconst { types, scopes, allowCustomScopes } = require("./commitizen.config");

const validTypes = types.map((type) => type.value);
const validScopes = scopes.map((scope) => scope.name);
const scopeValidationLevel = allowCustomScopes ? 1 : 2;

module.exports = {
	headerPattern: /^(?::\w*:|(?:\ud83c[\udf00-\udfff])|(?:\ud83d[\udc00-\ude4f\ude80-\udeff])|[\u2600-\u2B55])\s(?<type>\w*)(?:\((?<scope>.*)\))?!?:\s(?<subject>(?:(?!#).)*(?:(?!\s).))\s?(?<ticket>#\d*)?$/,
	headerCorrespondence: ["type", "scope", "subject", "ticket"],

	rules: {
		// Apply valid scopes and types
		"scope-enum": [scopeValidationLevel, "always", validScopes],
		"type-enum": [2, "always", validTypes],
	},
};
