$(document).ready(function() {
	console.log("JS works!");

	$('#renderCity').on('click', function pageTwo (event){
		event.preventDefault();
		window.location.href = '/city';

	});

	$('#cityAdd').on('submit', function addCity(event) {
		var itemExists = false;
		var newOption = $("#cityForm").val();

		event.preventDefault();
		$('.dropdownCities option').each(function(){
		if ($(this).text() == $.trim(newOption)) {
			itemExists = true;
			console.log('this city already exists');
			}
		});
		if(!itemExists) {
		$(".dropdownCities").append('<option value="'+newOption + '">'+newOption +'</option>');
		console.log("city added");

		}
	});

	$('#hiddenForm').on('click', function unHideCity(event) {
		event.preventDefault();

		console.log("button is clicked");


		$('#cityShow').css('display', 'inline-block');
	});
	

	
});