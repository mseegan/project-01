$(document).ready(function() {
	console.log("JS works!");

	//handlebar template for dropdown menu contents
	var source = $("#dropdown-template").html();
	// console.log(source);
	var template = Handlebars.compile(source);
	$.get('/api/city', function (data) {

		var dataHtml = template({city: data});
		console.log(data);
		
		$("#dropdownMenu").append(dataHtml);
		console.log("handlebars appended city to dropdown menu");
	});


	//sends you to the selected city's endpoint
	$('#renderCity').on('click', function pageTwo (event){
		event.preventDefault();
		var selectId = $('#dropdownMenu option:selected').attr('data-id');
		console.log(selectId);
		window.location.href = '/city';

		

	});
	//create new city
	$('#cityAdd').on('submit', function addCity(event) {
		var itemExists = false;
		var newOption = $("#cityForm").val();

		event.preventDefault();
		$('.dropdownCities option').each(function(){
			//checks for duplicate entry
		if ($(this).text() == $.trim(newOption)) {
			itemExists = true;
			//if duplicate exists, do nothing.
			console.log('this city already exists');
			}
		});
			//if no duplicates found, continue with create
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
	//makes a hidden city creation form visible on button press
	$('#hiddenForm').on('click', function unHideCity(event) {
		event.preventDefault();

		console.log("button is clicked");


		$('#cityShow').css('display', 'inline-block');
	});
	
	

	
});