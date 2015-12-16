$(document).ready(function() {
	console.log("JS works!");


	var source = $("#dropdown-template").html();
	// console.log(source);
	var template = Handlebars.compile(source);
	$.get('/api/city', function (data) {

		var dataHtml = template({city: data});
		console.log(data);
		
		$("#dropdownMenu").append(dataHtml);
		console.log("handlebars appended city to dropdown menu");
	});



	$('#renderCity').on('click', function pageTwo (event){
		event.preventDefault();
		var selectId = $('#dropdownMenu option:selected').attr('data-id');
		console.log(selectId);
		window.location.href = '/city' + '/' + selectId;

		

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
					console.log(data._id);
					console.log(newOption);
					$(".dropdownCities").append('<option value="'+data.Name + data.State + '">'+data.Name + ", " + data.State +'</option>');
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