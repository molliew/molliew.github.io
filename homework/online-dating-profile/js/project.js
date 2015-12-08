$(document).ready(function () {

	$('#heart').click(likeProfile);
	$('#message').click(messageMe);
	$('#block').click(blockMe);

	function likeProfile() {
		$('.like-profile').fadeIn("fast").delay(500).fadeOut("slow");
	}

	function messageMe() {
		$('.message-me').fadeIn("fast").delay(500).fadeOut("slow");
	}

	function blockMe() {
		$('.block-me').fadeIn("fast").delay(500).fadeOut("slow");
	}

});