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
			var formData = $('#formData').serialize();
			var cityData = $('#cityForm').val();
			var stateData = $('#stateForm').val();
			console.log(formData);
			console.log(cityData);
			console.log(stateData);

			$.ajax({
				method: 'POST',
				url: '/api/city',
				data: formData,
				success: function(data){
					$(".dropdownCities").append('<option value="'+newOption + '">'+newOption +'</option>');
					console.log("city added");
				}
			});
			

			
		

		}
	});

	$('#hiddenForm').on('click', function unHideCity(event) {
		event.preventDefault();

		console.log("button is clicked");


		$('#cityShow').css('display', 'inline-block');
	});
	
	

	
});