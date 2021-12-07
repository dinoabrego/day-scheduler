//Var to reference DOM elements


//Manages the display of today's date

var today = moment();
$("#current-day").text(today.format("dddd, MMM Do, YYYY"));