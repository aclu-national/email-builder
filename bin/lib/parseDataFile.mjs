export default async function parseDataFile(data) {
	const module = await import(data);
	return module.default;
}
