$(document).ready(function() {
	console.log("JS works!");

	$('#cityAdd').on('submit', function addCity(event) {
		event.preventDefault();
		
		var newOption = $("#cityForm").val();
		$(".dropdownCities").append('<option value="'+newOption + '">'+newOption +'</option>');
		
	
		console.log("city added");
		
	});

	$('#hiddenForm').on('click', function unHideCity(event) {
		event.preventDefault();

		console.log("button is clicked");


		$('#cityShow').css('display', 'inline-block');
	});
	

	
});