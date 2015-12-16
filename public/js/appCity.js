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

	$.post('/api/albums', formData, function(album) {
       console.log('album after POST', album);
     source(album);  
     });
     $(this).trigger("reset");
 

});




