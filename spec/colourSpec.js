var Colour = require("../js/lib/colour.js");

describe("Colour ratio", function() {
	// convert hex to rgba
	describe("function name", function() {
		
		it ("scenario name", function() {
			var colour = new Colour();
			colour.updateColour("red");
			var temp = colour.name;
			
			expect(temp).toBe("red");
		});

		it ("test generate", function() {
			var colour = new Colour("test");
			
			expect(colour.name).toBe("test");
		});

	});		

	// check background is not empty
	describe("function name 2", function() {
		
		
	});		

	// check foreground is not empty

	// check both empty

	// check contrast ratio
	// (L1 + 0.05) / (L2 + 0.05)

	// brightness difference (>= 125)
	// ((Red value * 299) + (Green value * 587) + (Blue value * 114)) / 1000

	// colour difference (>= 500)
	// (MAX(R1, R2)- MIN(R1, R2)) + (MAX(G1, G2)- MIN(G1, G2)) + (MAX(B1, B2)- MIN(B1, B2))

	// WCAG 2 AA compliant

	// WCAG 2 AA compliant (18pt+)

	// WCAG 2 AAA compliant

	// WCAG 2 AAA compliant (18pt+)
	
});