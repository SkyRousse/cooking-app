// begin Gallons to Liters calc
/*
var gallon = parseInt(prompt("How many gallons are used:"));

var liters = function(gallon) {
	return gallon / .26417;
};

var convertedLiters = liters(gallon);

alert(gallon + " gallons is equal to " + convertedLiters + " liters.");
*/
// end Gallons to Liters calc

//begin jQuery

$("#gallons-show").click(function() {
  $("#gallons-show").toggle();
  $("#gallons-hidden").toggle();
  $(".show-button").toggle();
});

$("#Tsp-show").click(function() {
  $("#Tsp-show").toggle();
  $("#Tsp-hidden").toggle();
});
/*$("#gallons-hidden").click(function() {
  $(".closed").show();
});

$("#Tsp-hidden").click(function() {
  $(".closed").show();
});
*/
