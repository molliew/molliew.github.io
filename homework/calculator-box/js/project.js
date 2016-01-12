// Great job on this! Functionality works perfectly and your code is clean with well-chosen variable and function names.

$(document).ready (function () {

	//Event Handler
	var total = 0;

	//Add 10 event
	$('#a10').click(add10)
	$('#a20').click(add20)
	$('#a30').click(add30)
	$('#red').click(makeRed)
	$('#out').click(reset)
	$('#blue').click(makeBlue)
	$('#n10').click(sub10)
	$('#n20').click(sub20)
	$('#n30').click(sub30)

	//Function
	function add10 () {
		total = total + 10;
		$('#out').text(total)
	}

	function add20 () {
		total = total + 20;
		$('#out').text(total)
	}

	function add30 () {
		total = total + 30;
		$('#out').text(total)
	}

	function makeRed () {
		$('#out').css('background-color', 'red');
	}

	function reset () {
		total = 0
		$('#out').text(total)
		$('#out').css('background-color', 'white');
	}

	function makeBlue () {
		$('#out').css('background-color', 'blue');
	}

	function sub10 () {
		total = total - 10;
		$('#out').text(total);
	}

	function sub20 () {
		total = total - 20;
		$('#out').text(total);
	}

	function sub30 () {
		total = total - 30;
		$('#out').text(total);
	}

	//Run the function logic

	//Output and print







})