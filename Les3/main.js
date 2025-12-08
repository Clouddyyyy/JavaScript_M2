function countdowntimer(){
let now = new Date();
console.log(now);
let release = new Date("19 november 2026");
console.log(release);
//display1 \/
let daysElement = document.getElementById("days");
let hoursElement = document.getElementById("hours");
let minutesElement = document.getElementById("minutes");
let secondsElement = document.getElementById("seconds");
let totalElement = document.getElementById("total");
// calculations \/
let miliseconds = release - now;
let days = Math.floor(miliseconds / (1000 * 60 * 60 * 24));
let hours = Math.floor((miliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((miliseconds % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((miliseconds % (1000 * 60)) / 1000);
let totaltime = [];
totaltime.push(days, hours, minutes, seconds);
console.log(totaltime);
console.log(days + " days left ", hours + " hours left", minutes + " mintutes left", seconds + " seconds left");
// display2 \/
daysElement.innerText = days + " days";
hoursElement.innerText = hours + " hours";
minutesElement.innerText = minutes + " minutes";
secondsElement.innerText = seconds + " seconds";
totalElement.innerText = totaltime + " totaltime array";
}

setInterval(countdowntimer, 1000);