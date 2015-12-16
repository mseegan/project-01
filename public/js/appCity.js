$(document).ready(function() {
  console.log('app.js loaded!');

	var source2 = $("#city-template").html();
	// console.log(source2);
	var template = Handlebars.compile(source2);
	$.get('/api/city', function (data) {

		var dataHtml = template({city: data});
		// console.log(data);
		
		$("#start-point").append(dataHtml);
		console.log("handlebars appended city");
	});


 
});




