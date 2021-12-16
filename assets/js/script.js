//Variables to reference DOM elements
var textEl09 = document.getElementById('09');
var textEl10 = document.getElementById('10');
var textEl11 = document.getElementById('11');
var textEl12 = document.getElementById('12');
var textEl13 = document.getElementById('13');
var textEl14 = document.getElementById('14');
var textEl15 = document.getElementById('15');
var textEl16 = document.getElementById('16');
var textEl17 = document.getElementById('17');

//Manages the display of today's date
let today = moment();
var todayEl = document.getElementById("current-day");
todayEl.textContent = (today.format("dddd, MMM Do, YYYY , h:mm a"));

//Upon load it will set the event colors according to the current hour
//It will call the function to get stored events
 

window.onload = function setColorBlock () {
   
    var hourBlocksId = [
        "09", 
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17"
    ];

    let currentHour =  moment().format('HH');
    console.log(currentHour); 

    for (var i = 0; i < hourBlocksId.length; i++) {
        var hourBlocksEl = document.getElementById(hourBlocksId[i]);
        let blockHour = hourBlocksEl.getAttribute('data-hour',[i]);
        console.log(blockHour);
        let blockHour2 = parseInt(hourBlocksEl.getAttribute('data-hour'));
        console.log(blockHour2);
        if (blockHour < currentHour) {
            hourBlocksEl.addClass('past');
        } else if (blockHour === currentHour) {
            hourBlocksEl.addClass('present');
        } else {
            hourBlocksEl.addClass('future');
        }
    };
}


//Show previously saved events when page loads
textEl09.onload = getStoredEvents9AM();
textEl10.onload = getStoredEvents10AM();
textEl11.onload = getStoredEvents11AM();
textEl12.onload = getStoredEvents12PM();
textEl13.onload = getStoredEvents1PM();
textEl14.onload = getStoredEvents2PM();
textEl15.onload = getStoredEvents3PM();
textEl16.onload = getStoredEvents4PM();
textEl17.onload = getStoredEvents5PM();


//Functions to retrieve saved events by hour
function getStoredEvents9AM() {
    var storedEvent09 = JSON.parse(localStorage.getItem("event09"));
    if (storedEvent09 !== null) {
        textEl09.value = storedEvent09; 
    }
}

function getStoredEvents10AM() {
    var storedEvent10 = JSON.parse(localStorage.getItem("event10"));
    if (storedEvent10 !== null) {
        textEl10.value = storedEvent10; 
    }
}

function getStoredEvents11AM() {
    var storedEvent11 = JSON.parse(localStorage.getItem("event11"));
    if (storedEvent11 !== null) {
        textEl11.value = storedEvent11; 
    }
}

function getStoredEvents12PM() {
    var storedEvent12 = JSON.parse(localStorage.getItem("event12"));
    if (storedEvent12 !== null) {
        textEl12.value = storedEvent12; 
    }
}

function getStoredEvents1PM() {
    var storedEvent13 = JSON.parse(localStorage.getItem("event13"));
    if (storedEvent13 !== null) {
        textEl13.value = storedEvent13; 
    }
}

function getStoredEvents2PM() {
    var storedEvent14 = JSON.parse(localStorage.getItem("event14"));
    if (storedEvent14 !== null) {
        textEl14.value = storedEvent14; 
    }
}

function getStoredEvents3PM() {
    var storedEvent15 = JSON.parse(localStorage.getItem("event15"));
    if (storedEvent15 !== null) {
        textEl15.value = storedEvent15; 
    }
}

function getStoredEvents4PM() {
    var storedEvent16 = JSON.parse(localStorage.getItem("event16"));
    if (storedEvent16 !== null) {
        textEl16.value = storedEvent16; 
    }
}

function getStoredEvents5PM() {
    var storedEvent17 = JSON.parse(localStorage.getItem("event17"));
    if (storedEvent17 !== null) {
        textEl17.value = storedEvent17; 
    }
}


//Saving to local storage

var saveButton09 = document.getElementById('saveBtn09');
var saveButton10 = document.getElementById('saveBtn10');
var saveButton11 = document.getElementById('saveBtn11');
var saveButton12 = document.getElementById('saveBtn12');
var saveButton13 = document.getElementById('saveBtn13');
var saveButton14 = document.getElementById('saveBtn14');
var saveButton15 = document.getElementById('saveBtn15');
var saveButton16 = document.getElementById('saveBtn16');
var saveButton17 = document.getElementById('saveBtn17');

saveButton09.onclick = saveEvent9AM;
saveButton10.onclick = saveEvent10AM;
saveButton11.onclick = saveEvent11AM;
saveButton12.onclick = saveEvent12PM;
saveButton13.onclick = saveEvent1PM;
saveButton14.onclick = saveEvent2PM;
saveButton15.onclick = saveEvent3PM;
saveButton16.onclick = saveEvent4PM;
saveButton17.onclick = saveEvent5PM;


function saveEvent9AM(){
  var inputEvent09 = textEl09.value;
  localStorage.setItem("event09", JSON.stringify(inputEvent09));
}

function saveEvent10AM(){
    var inputEvent10 = textEl10.value;
    localStorage.setItem("event10", JSON.stringify(inputEvent10));
}

function saveEvent11AM(){
  var inputEvent11 = textEl11.value;
  localStorage.setItem("event11", JSON.stringify(inputEvent11));
}

function saveEvent12PM(){
    var inputEvent12 = textEl12.value;
    localStorage.setItem("event12", JSON.stringify(inputEvent12));
}

function saveEvent1PM(){
    var inputEvent13 = textEl13.value;
    localStorage.setItem("event13", JSON.stringify(inputEvent13));
}

function saveEvent2PM(){
    var inputEvent14 = textEl14.value;
    localStorage.setItem("event14", JSON.stringify(inputEvent14));
}

function saveEvent3PM(){
    var inputEvent15 = textEl15.value;
    localStorage.setItem("event15", JSON.stringify(inputEvent15));
}

function saveEvent4PM(){
    var inputEvent16 = textEl16.value;
    localStorage.setItem("event16", JSON.stringify(inputEvent16));
}

function saveEvent5PM(){
    var inputEvent17 = textEl17.value;
    localStorage.setItem("event17", JSON.stringify(inputEvent17));
}
