# Transavia Colors

All colors of Transavia to use for different purposes.

## File types

### CSS

When the css file is imported, a set of custom properties can be used.
The set includes also RGB and HSL colors

This is an example for the color Green, this set is available for all colors in the Transavia Set.

```css
:root {
	--hv-Green: #00d66c;
	--hv-Green-hue: 150.2803738317757;
	--hv-Green-saturation: 100;
	--hv-Green-lightness: 41.96078431372549;
	--hv-Green-red: 0;
	--hv-Green-green: 214;
	--hv-Green-blue: 108;

	...;
}
```

### JS

The js file can be imported as an object and includes the basic colors.

```js
import { hex } as hv from '~hv-color/hv/transavia.js'

console.log(hv.Green);

// result: #00d66c
```

All RGB and HSL colors are also available like;

```js
import { rgb } as hv from '~hv-color/hv/transavia.js'

console.log(hv.Green.r);

// result: 0
```

### JSON

Json can be used in the same way as the JS but has a a little different build way. This so they can both be used in other cases.

```js
import hv from "~hv-color/hv/transavia.json";

console.log(hv.Green);

// result: #00d66c
```

All RGB and HSL colors are also available like;

Rgb and hsl are array values for the [colorName]\_rgb and [colorName]\_hsl

```js
import hv from "~hv-color/hv/transavia.js";

console.log(hv.Green_rgb[0]); // Returns the first value of Green aka the Red of Green.

// result: 0
```

### Less

The less file works with both a list of colors which can be manipulated and hard variables.

List

```less
.hv-colors() {
	green: #00d66c;
	greendark: #1e9162;
	greenlight: #4de298;
	...;
}
```

Variables

```less
@hv-Green: #00d66c;
@hv-Green: #00d66c;
@hv-Green-h: 150.2803738317757;
@hv-Green-s: 100;
@hv-Green-l: 41.96078431372549;
@hv-Green-r: 0;
@hv-Green-g: 214;
@hv-Green-b: 108;

...;
```

### Scss

The less file works with both a list of colors which can be manipulated and hard variables.

List default (hex) and extended (rgb/hsl).

```scss
$hv-colors: (
	"Green": #00d66c,
	"GreenDark": #1e9162,
	"GreenLight": #4de298,
	...
);

$hv-colors-extended: (
	"Green": (
		"r": 0,
		"g": 214,
		"b": 108,
		"h": 150.2803738317757,
		"s": 100,
		"l": 41.96078431372549
	),
	...
);
```

Variables

```scss

$hv-Green: #00d66c;
$hv-Green-s: 100;
$hv-Green-l: 41.96078431372549;
$hv-Green-r: 0;
$hv-Green-g: 214;
$hv-Green-b: 108;

...

```

### Sketch

The sketchfile can be used in sketch in combination with the [sketch-palettes](https://github.com/andrewfiorillo/sketch-palettes) plugin
