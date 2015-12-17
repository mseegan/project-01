$(document).ready(function() {
  console.log('app.js loaded!');
  var cityId = window.location.pathname.split('/')[2];
  

	$.ajax({
  		method: 'GET',
  		url: '/api/city/' + cityId,
  		success: function(data) {
  			
  			
  			data.reports.forEach(function callback (e){
  			$("#renderReports").append(data.reports[0].crossStreet1);
  			$("#renderReports").append(data.reports[0].crossStreet2);
  			$("#renderReports").append(data.reports[0].status);
  			$("#renderReports").append(data.reports[0]._id);
  			});	
  		}

  	});
  	$("#reportButton").click(function() {
   		event.preventDefault();
  		console.log("button pressed");
  		var xStreet1 = $('#crossStreetForm1').val();
  		var xStreet2 = $('#crossStreetForm2').val();
  		var fixed = $('#fixed').val();
  		
  			if ($('#fixed').is(":checked")){
  				
  				console.log($("input[type='checkbox']").val());
  			}
  		
  		
	
  	});
});



