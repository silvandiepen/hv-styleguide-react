const fs = require("fs");
const ejs = require("ejs");
const path = require("path");
const prettier = require("prettier");
const helpers = require("./helpers.js");
const args = require("minimist")(process.argv.slice(2));

const colors = require("../" + args.src);

console.log(path.parse(args.src).name);

const files = [
	{
		name: "css",
		ext: "css"
	},
	{ name: "javascript", ext: "js" },
	{ name: "less", ext: "less" },
	{ name: "sass", ext: "scss" },
	{ name: "json", ext: "json" },
	{ name: "sketch", ext: "sketchpalette" }
];

let advancedColors = {};
Object.keys(colors.colors).forEach((color, index) => {
	advancedColors[color] = {
		...helpers.hexToRgb(colors.colors[color]),
		...helpers.hexToHsl(colors.colors[color]),
		hex: colors.colors[color]
	};
});

// console.log(advancedColors);
files.forEach(async (fileType) => {
	// File path to template
	const templateFile = `scripts/templates/template.${fileType.ext}`;

	// Get the template
	await fs.readFile(templateFile, function(err, data) {
		if (err) return console.error(err);
		let generatedFile = ejs.render(data.toString(), {
			_: helpers,
			colors: colors.colors,
			advancedColors: advancedColors
		});

		let parser = fileType.ext;
		switch (fileType.ext) {
			case "js":
				parser = "babel";
				break;
			case "sketchpalette":
				parser = "json";
				break;
			case "css":
			case "less":
			case "scss":
				parser = "css";
				break;
		}
		let formattedFile = generatedFile;
		if (parser) {
			formattedFile = prettier.format(generatedFile, {
				parser: parser
			});
		}

		fs.writeFile(
			`hv/${path.parse(args.src).name.toLowerCase()}.${fileType.ext}`,
			formattedFile,
			"utf8",
			(err) => {
				if (err) throw err;
				console.log(fileType.name, "file created");
			}
		);
	});
});
