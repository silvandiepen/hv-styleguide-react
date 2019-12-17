exports = module.exports = {};

exports.camelCase = function(str) {
	return str
		.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
			return index == 0 ? word.toUpperCase() : word.toUpperCase();
		})
		.replace(/\s+/g, "");
};

exports.PascalCase = function(str) {
	if (!str) return "";
	return String(str)
		.replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, "$")
		.replace(/[^A-Za-z0-9]+/g, "$")
		.replace(/([a-z])([A-Z])/g, (m, a, b) => a + "$" + b)
		.toLowerCase()
		.replace(/(\$)(\w?)/g, (m, a, b) => b.toUpperCase());
};

const hexToRgb = function(hex) {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result
		? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16)
		  }
		: null;
};
exports.hexToRgb = hexToRgb;

exports.hexToHsl = function(hex) {
	const rgb = hexToRgb(hex);

	const r1 = rgb.r / 255;
	const g1 = rgb.g / 255;
	const b1 = rgb.b / 255;

	const maxColor = Math.max(r1, g1, b1);
	const minColor = Math.min(r1, g1, b1);
	//Calculate L:
	let L = (maxColor + minColor) / 2;
	let S = 0;
	let H = 0;
	if (maxColor != minColor) {
		//Calculate S:
		if (L < 0.5) {
			S = (maxColor - minColor) / (maxColor + minColor);
		} else {
			S = (maxColor - minColor) / (2.0 - maxColor - minColor);
		}
		//Calculate H:
		if (r1 == maxColor) {
			H = (g1 - b1) / (maxColor - minColor);
		} else if (g1 == maxColor) {
			H = 2.0 + (b1 - r1) / (maxColor - minColor);
		} else {
			H = 4.0 + (r1 - g1) / (maxColor - minColor);
		}
	}

	L = L * 100;
	S = S * 100;
	H = H * 60;
	if (H < 0) {
		H += 360;
	}
	return (result = { h: H, s: S, l: L });
};
