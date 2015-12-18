$(document).ready(function() {
  console.log('app.js loaded!');
  var cityId = window.location.pathname.split('/')[2];
  

	$.ajax({
  		method: 'GET',
  		url: '/api/city/' + cityId,
  		success: function(data) {
  			
  			
  			data.reports.forEach(function callback (e){
  			$('#renderReports').html(generateHtml(data));
  			});	
  		}

  	});

  	function showValues() {
  		var formData = $('#reportForm').serialize();
  		console.log(formData);
  		$.ajax({
  			type:  'POST',
  			url: '/api/city/' + cityId + '/report',
  			data: formData,
  			success: function(data) {
  				console.log(data);
  				$('#renderReports').html(generateHtml(data));
  				

  			}
  		});
  		 }
  	$("#reportButton").click(function() {
   		event.preventDefault();
  		console.log("button pressed");
  	
  		showValues();
  	});
  	
});	

function generateHtml (data){
	console.log(data._id);
	var cityId = window.location.pathname.split('/')[2];
	console.log(cityId);
	$('#renderReports').append( data._id + '<input type="button" data-id="_id" value="delete"/>');
}