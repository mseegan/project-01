$(document).ready(function() {
  console.log('app.js loaded!');

var source   = $("#city-template").html();
var template = Handlebars.compile(source);

$.get('/api/city/id/reports').success(function (data) {
	Handlebars.compile(source).template({reports: data});
});



});




