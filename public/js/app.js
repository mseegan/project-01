$(document).ready(function() {
	console.log("JS works!");

	$('#cityAdd').on('submit', function addCity(event) {
		event.preventDefault();
		console.log("city added");
		
	});

	$('#hiddenForm').on('click', function unHideCity(event) {
		event.preventDefault();

		console.log("button is clicked");


		$('#cityShow').css('display', 'inline-block');
	});
	
	
});