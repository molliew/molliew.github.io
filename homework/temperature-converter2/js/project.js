$('#down').click(decreaseTemp);
$('#up').click(increaseTemp);


var currentTemp = $('.number').html();
currentTemp = parseInt(currentTemp);

function decreaseTemp() {
	currentTemp = currentTemp - 1;
	$('.number').html(currentTemp);
	checkTemp(currentTemp);
}

function increaseTemp() {
	currentTemp = currentTemp + 1;
	$('.number').html(currentTemp);
	checkTemp(currentTemp);
}

function checkTemp(temp) {
if (temp <= 65) {
	$('.number-holder').css('background-color', '#2980b9');
}
else if (temp >= 75) {
	$('.number-holder').css('background-color', '#c0392b');
}
else {
	$('.number-holder').css('background-color', '#cccccc');
}
}