
(function() {

	// Extend Math.round to allow for precision
	Math.round = (function(){
		var round = Math.round;
		
		return function (number, decimals) {
			decimals = +decimals || 0;
			
			var multiplier = Math.pow(10, decimals);
			
			return round(number * multiplier) / multiplier;
		};
	})();

	var Colour = (function() {
		var Colour = function(rgba) {
			this.name = rgba;      
		};

		Colour.prototype = {

			get inverse () {
				return 2;
			},

			updateColour: function(val) {
				this.name = val;
			},      

			generate: function() {
				return Math.round(this.inverse, 2);
			}
		};

		return Colour;
	})();

	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){		
		module.exports = Colour;
	}
	else{
		window.Colour = Colour;
	}
})();