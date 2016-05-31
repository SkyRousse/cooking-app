// begin Gallons to Liters calc
var gallon = parseInt(prompt("How many gallons are used:"));

var liters = function(gallon) {
	return gallon / .26417;
};

var convertedLiters = liters(gallon);

alert(gallon + " gallons is equal to " + convertedLiters + " liters.");
// end Gallons to Liters calc
