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
  		showValues();
  	});


  	
  	$("#renderReports").on('click','#deleteButton',function() {
		event.preventDefault();
		console.log("delete button pressed");
  		var cityId = window.location.pathname.split('/')[2];
  		var id = $(this).attr("data-id");
  		
		deleteReport();
		function deleteReport() {
  		
  		$.ajax({
  			type: 'DELETE',
  			url: '/api/city/' + cityId + '/report/' + id,
  			success: function(data) {
  				$(this).parent('.report').remove();


  			}
  		});
  	}
	});
  	


});	
function generateHtml (data){
	console.log(data.reports[0]);
	
	// console.logs(cityId);

		var source3 = $('#report-template').html();
		// console.log(source3);
		var template = Handlebars.compile(source3);
		// console.log("template here:",template);
		
			// console.log(data);
			var dataHtml = template({report: data.reports});
			
			$('#renderReports').append(dataHtml);
		

	
}