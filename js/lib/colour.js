var Colour = function(){
	this.name = "Blue";
};

Colour.prototype = {
	updateColour: function(val) {
		this.name = val;
	}
}

module.exports = Colour;