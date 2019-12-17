const hex = { 
	<% var i=0; Object.keys(colors).forEach(function(color){ i++; %>
		"<%= _.PascalCase(color) %>": "<%= colors[color] %>"
		<% if (i < Object.keys(colors).length){ %>,<% } %> 
	<% }); %>
};

const hsl =  { 
	<% var i=0; Object.keys(colors).forEach(function(color){ i++; %>
		"<%= _.PascalCase(color) %>": {
			"h": <%= advancedColors[color].h %>,
			"s": <%= advancedColors[color].s %>,
			"l": <%= advancedColors[color].l %>
		}
		<% if (i < Object.keys(colors).length){ %>,<% } %> 
	<% }); %>
};


const rgb = { 
	<% var i=0; Object.keys(colors).forEach(function(color){ i++; %>
		"<%= _.PascalCase(color) %>": {
			"r": <%= advancedColors[color].r %>,
			"g": <%= advancedColors[color].g %>,
			"b": <%= advancedColors[color].b %>
		}
		<% if (i < Object.keys(colors).length){ %>,<% } %> 
	<% }); %>
};

export default { hex, rgb, hsl }; 