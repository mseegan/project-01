$(document).ready(function() {
  console.log('app.js loaded!');
  var cityId = window.location.pathname.split('/')[2];


	$.ajax({
  		method: 'GET',
  		url: '/api/city/' + cityId,
  		success: function(data) {
  			console.log('city', data);


  			generateHtml(data.reports);
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
  				generateHtml([data]);  // the function expects an array, but we have just one
  			}
  		});
  	}
  	$("#reportButton").click(function() {
   		event.preventDefault();
  		showValues();
  	});

  	$("#renderReports").on('click','#deleteButton', function() {
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

	// $('#renderReports').on('click', '#updateButton', function(){
	// 	event.preventDefault();
	// 	console.log('button update pressed');
	// 	var cityId = window.location.pathname.split('/')[2];
	// 	var id = $(this).attr("data-id");

	// 	console.log($(this).attr("data-id"));
	// 	function updateReport(event) {
 //  			$.ajax({
 //  				type: 'PUT',
 //  				url: '/api/city/' + cityId + '/report/' + id,
 //  				success: function(data) {

 //  				}
 //  			});




 //  	}
 //  	});

});

// this function accepts an array of reports and renders them to the page
function generateHtml (reports){
	console.log(reports);

	// console.logs(cityId);

		var source3 = $('#report-template').html();
		// console.log(source3);
		var template = Handlebars.compile(source3);
		// console.log("template here:",template);

		// console.log(data);
		var dataHtml = template({reports: reports});

		$('#renderReports').append(dataHtml);



}
