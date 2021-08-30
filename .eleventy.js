module.exports = function (eleventyConfig) {
	eleventyConfig.addLayoutAlias("blank", "layouts/blank.njk");
	eleventyConfig.addLayoutAlias("index", "layouts/index.njk");
	eleventyConfig.addLayoutAlias("base", "layouts/base.njk");

	return {
		htmlTemplateEngine: "njk",
		templateFormats: ["html", "njk", "md"],
		markdownTemplateEngine: "njk",
		passthroughFileCopy: true,
		dir: {
			input: "src",
			output: "dist",
			data: "_data",
		},
	};
};
