$(document).ready(function() {
  console.log('app.js loaded!');
  var cityId = window.location.pathname.split('/')[2];
  

	$.ajax({
  		method: 'GET',
  		url: '/api/city/' + cityId,
  		success: function(data) {
  			
  			
  			
  			generateHtml(data);
  			
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
	console.log(data.reports[0]);
	var cityId = window.location.pathname.split('/')[2];
	// console.logs(cityId);

		var source3 = $('#report-template').html();
		// console.log(source3);
		var template = Handlebars.compile(source3);
		// console.log("template here:",template);
		
			// console.log(data);
			var dataHtml = template({report: data.reports});
			console.log('hello daniel');
			console.log(data);
			console.log('something above here');
			$('#renderReports').append(dataHtml + '<input type="button" data-id="_id" value="delete"/>');
		

	
}