// Good job on this. You've made a nice thermostat. Javascript functionality and syntax is great.

document.getElementById('down').onclick = decreaseTemp;
document.getElementById('up').onclick = increaseTemp;

var currentTemp = document.getElementById('number').innerHTML;
currentTemp = parseInt(currentTemp);

function decreaseTemp () {
	currentTemp = currentTemp - 1;
	document.getElementById('number').innerHTML = currentTemp;
}

function increaseTemp () {
	currentTemp = currentTemp + 1;
	document.getElementById('number').innerHTML = currentTemp;
}