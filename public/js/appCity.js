$(document).ready(function() {
  console.log('app.js loaded!');

	var source = $("#city-template").html();
	// console.log(source);
	var template = Handlebars.compile(source);
	$.get('/api/city', function (data) {

		var dataHtml = template({city: data});
		// console.log(data);
		
		$("#start-point").append(dataHtml);
		console.log("handlebars appended city");
	});

	$('#createButton').on('click',function (event){
		event.preventDefault();
		alert("thomas is the best");
	});



	// $.post('/api/city', formData, function(city) {
 //       console.log('city after POST', city);
 //     source(city);  
 //     });
 //     $(this).trigger("reset");
 
});




