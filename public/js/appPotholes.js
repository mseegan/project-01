$(document).ready(function() {
  console.log('app.js loaded!');
  var cityId = window.location.pathname.split('/')[2];
  console.log(cityId);

	$.ajax({
  		method: 'GET',
  		url: '/api/city/' + cityId,
  		success: function(data) {
  			console.log(data.reports[0]);
  			dataHtml = data.reports[0];
  			$("#renderReports").append(dataHtml);

  			
  		}

  	});
});



