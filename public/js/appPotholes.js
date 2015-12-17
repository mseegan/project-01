$(document).ready(function() {
  console.log('app.js loaded!');
  var cityId = window.location.pathname.split('/')[2];
  console.log(cityId);

	$.ajax({
  		method: 'GET',
  		url: '/api/city/' + cityId,
  		success: function(data) {
  			console.log(data.reports);
  			console.log(data.reports[0]);
  			console.log(data.reports[0].crossStreet1);
  			console.log(data.reports[0].crossStreet2);
  			console.log(data.reports[0].status);
  			console.log(data.reports[0]._id);
  			
  			$("#renderReports").append(data.reports[0]._id);


  			

  			
  		}

  	});

  	
});



