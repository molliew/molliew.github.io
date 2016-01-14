// user types character st ring into input box
// user clicks button to create image
// fire click event
// run function to check what characters were inputted
// convert inputted characters to alphabite characters
// display character string as alphabite string

$("#submit").click( function(){
	var characters = $("#text").val();
	$("#text").val('');
	$("#food").empty();
	$("#food").show();
	for(var i=0; i<characters.length; i++){
		var letter = characters[i];
		if (!letter.match(/[a-zA-Z]/i)) {
			continue;
		}
		var folder;
		if (isLowerCase(letter)){
			folder = "lowercase";
		}
		else {
			folder = "capital";
		}
		console.log(letter);
		var imageToAdd = "<img src='img/" + folder +"/"+ letter +".svg'>";
		$("#food").append(imageToAdd);
	}


});

$("textarea").keyup(function(event){
	var characters = $("#text").val();
	var lettersOnly = characters.replace(/[^A-Za-z]/g, '');
	$("#text").val(lettersOnly);
});

function isLowerCase(letter){
	if (letter == letter.toLowerCase()) {
		return true;
	} 
	else {
		return false;
	}
}