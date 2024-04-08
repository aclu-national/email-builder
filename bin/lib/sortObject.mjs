export default function stringifyObject(obj, indent = "  ") {
	const isArray = Array.isArray(obj);
	const entries = Object.entries(obj)
		.sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
		.map(([key, value]) => {
			key = isArray ? "" : key + ": ";
			if (value && typeof value === "object") {
				value = stringifyObject(value, indent + "  ");
			} else if (typeof value === "string") {
				value = `'${value}'`;
			}
			return indent + key + value;
		});
	const start = isArray ? "[" : "{";
	const end = isArray ? "]" : "}";
	return `${start}\n${entries.join(",\n")}\n${indent.slice(2)}${end}`;
}
