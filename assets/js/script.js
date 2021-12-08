//Manages the display of today's date
var today = moment();
$("#current-day").text(today.format("dddd, MMM Do, YYYY"));

//Setting the event colors accprding to thecurrent hour

let currentHour =  moment().format("HH");
var hourBlock = document.getElementsByClassName('events');

function setColors() {
   var blockHour = parseInt($(this).attr("id"));
    if (blockHour < currentHour) {
          hourBlock.addClass("past").remove("present, future");
    } else if (blockHour === currentHour) {
          hourBlock.addClass("present").remove("past, future");
    } else if (blockHour > currentHour) {
          hourBlock.addClass("future").remove("past, present");
    }
}

setInterval(setColors(), (1000 * 60) * 10);

//Show previously saved events when page loads
document.getElementById("09").onload = getStoredEvents9AM();
document.getElementById("10").onload = getStoredEvents10AM();
document.getElementById("11").onload = getStoredEvents11AM();
document.getElementById("12").onload = getStoredEvents12PM();
document.getElementById("13").onload = getStoredEvents1PM();
document.getElementById("14").onload = getStoredEvents2PM();
document.getElementById("15").onload = getStoredEvents3PM();
document.getElementById("16").onload = getStoredEvents4PM();
document.getElementById("17").onload = getStoredEvents5PM();

//Functions to retrieve saved events by hour
function getStoredEvents9AM() {
    var storedEvent9 = JSON.parse(localStorage.getItem("event9"));
    if (storedEvent9 !== null) {
        document.getElementById("09").value = storedEvent9; 
    }
}

function getStoredEvents10AM() {
    var storedEvent10 = JSON.parse(localStorage.getItem("event10"));
    if (storedEvent10 !== null) {
        document.getElementById("10").value = storedEvent10; 
    }
}

function getStoredEvents11AM() {
    var storedEvent11 = JSON.parse(localStorage.getItem("event11"));
    if (storedEvent11 !== null) {
        document.getElementById("11").value = storedEvent11; 
    }
}

function getStoredEvents12PM() {
    var storedEvent12 = JSON.parse(localStorage.getItem("event12"));
    if (storedEvent12 !== null) {
        document.getElementById("12").value = storedEvent12; 
    }
}

function getStoredEvents1PM() {
    var storedEvent1 = JSON.parse(localStorage.getItem("event1"));
    if (storedEvent1 !== null) {
        document.getElementById("13").value = storedEvent1; 
    }
}

function getStoredEvents2PM() {
    var storedEvent2 = JSON.parse(localStorage.getItem("event2"));
    if (storedEvent2 !== null) {
        document.getElementById("14").value = storedEvent2; 
    }
}

function getStoredEvents3PM() {
    var storedEvent3 = JSON.parse(localStorage.getItem("event3"));
    if (storedEvent3 !== null) {
        document.getElementById("15").value = storedEvent3; 
    }
}

function getStoredEvents4PM() {
    var storedEvent4 = JSON.parse(localStorage.getItem("event4"));
    if (storedEvent4 !== null) {
        document.getElementById("16").value = storedEvent4; 
    }
}

function getStoredEvents5PM() {
    var storedEvent5 = JSON.parse(localStorage.getItem("event5"));
    if (storedEvent5 !== null) {
        document.getElementById("17").value = storedEvent5; 
    }
}


//Saving to local storage

var saveButton9 = document.getElementById('saveBtn9');
var saveButton10 = document.getElementById('saveBtn10');
var saveButton11 = document.getElementById('saveBtn11');
var saveButton12 = document.getElementById('saveBtn12');
var saveButton1 = document.getElementById('saveBtn1');
var saveButton2 = document.getElementById('saveBtn2');
var saveButton3 = document.getElementById('saveBtn3');
var saveButton4 = document.getElementById('saveBtn4');
var saveButton5 = document.getElementById('saveBtn5');

saveButton9.onclick = saveEvent9AM();
saveButton10.onclick = saveEvent10AM();
saveButton11.onclick = saveEvent11AM();
saveButton12.onclick = saveEvent12PM();
saveButton1.onclick = saveEvent1PM();
saveButton2.onclick = saveEvent2PM();
saveButton3.onclick = saveEvent3PM();
saveButton4.onclick = saveEvent4PM();
saveButton5.onclick = saveEvent5PM();

function saveEvent9AM(){
  var inputEvent9 = document.getElementById('09').value;
  localStorage.setItem("event9", JSON.stringify(inputEvent9));
}

function saveEvent10AM(){
    var inputEvent10 = document.getElementById('10').value;
    localStorage.setItem("event10", JSON.stringify(inputEvent10));
}

function saveEvent11AM(){
  var inputEvent11 = document.getElementById('11').value;
  localStorage.setItem("event11", JSON.stringify(inputEvent11));
}

function saveEvent12PM(){
    var inputEvent12 = document.getElementById('12').value;
    localStorage.setItem("event12", JSON.stringify(inputEvent12));
}

function saveEvent1PM(){
    var inputEvent1 = document.getElementById('13').value;
    localStorage.setItem("event1", JSON.stringify(inputEvent1));
}

function saveEvent2PM(){
    var inputEvent2 = document.getElementById('14').value;
    localStorage.setItem("event2", JSON.stringify(inputEvent2));
}

function saveEvent3PM(){
    var inputEvent3 = document.getElementById('15').value;
    localStorage.setItem("event3", JSON.stringify(inputEvent3));
}

function saveEvent4PM(){
    var inputEvent4 = document.getElementById('16').value;
    localStorage.setItem("event4", JSON.stringify(inputEvent4));
}

function saveEvent5PM(){
    var inputEvent5 = document.getElementById('17').value;
    localStorage.setItem("event5", JSON.stringify(inputEvent5));
}
