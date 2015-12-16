$(document).ready(function() {
  console.log('app.js loaded!');
  	//template for show.html rendering
	var source3 = $("#pothole-template").html();
	console.log(source3);
	var template = Handlebars.compile(source3);
	$.get('/api/city/:id', function (data) {

		var dataHtml = template({city: data});

		console.log(data);
		
		$("#start-point").append(dataHtml);
		console.log("handlebars appended city");
	});


 
});