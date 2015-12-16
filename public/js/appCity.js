$(document).ready(function() {
  console.log('app.js loaded!');

var source = $("#city-template").html();
var template = Handlebars.compile(source);

$.get('/api/city', function (data) {
	var dataHtml = template({city: data});
	$("#city-template").append(dataHtml);
	console.log("handlebars appended city");
});



});




