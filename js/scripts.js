//business logic
var multiply = function(number1, number2) {
	return number1 * number2;
};

var divide = function(number1, number2) {
	return number1 / number2;
};

// user interface logic
$(document).ready(function() {
  $("form#gallons-liters").submit(function(event) {
    event.preventDefault();
    var conversionNumber = .26417;
    var gallon = parseInt($("input#gallons").val());
    var calculatedLiters = divide(gallon, conversionNumber);
    $("#results").text(calculatedLiters);
  });
});

$(document).ready(function() {
  $("form#tsp-floz").submit(function(event){
    event.preventDefault();
    var conversionNumber = 0.16667;
    var tsp = $("input#tsp").val();
    var calculatedFloz = multiply(tsp, conversionNumber);
    $("#results").text(calculatedFloz);
  });
});

// end Gallons to Liters calc

//begin jQuery
/*
$("#gallons-show").click(function() {
  $("#gallons-show").toggle();
  $("#gallons-hidden").toggle();
  $(".show-button").toggle();
});

$("#Tsp-show").click(function() {
  $("#Tsp-show").toggle();
  $("#Tsp-hidden").toggle();
});
*/
/*$("#gallons-hidden").click(function() {
  $(".closed").show();
});

$("#Tsp-hidden").click(function() {
  $(".closed").show();
});
*/
