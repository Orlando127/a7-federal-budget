$(function() {

  // your js goes in betwen these two things

// starting cut equal to zero
var cut = .25;

//select all of the items
$(".item").click(function(){
  var amount = $(this).attr("data-amount-cut");

  // this is changing the amount to a number so it can be added up
  var amountNumber = parseInt(amount);
  cut = cut + amountNumber;

  $("#cut-so-far").text(cut);

  //selects the things we clicked on
  $(this).addClass("already-cut");

}); // end of what happens when item is clicked on
// when clicked
// do some stuff

// when we click an item
// get the value of how much to add to our cut
// add it to the cut
// update the current cut text
// turn the thing we clicked on grey
// make the thing we clicked on inactive


}); // don't delete this
