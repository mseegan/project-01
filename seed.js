var db = require("./models");

var cityList = [];
	
cityList.push({
	State: "California",
	Name: "San Francisco",
	
	
},
{
	State: "Nueva York",
	Name: "Ciudad de Nueva York",
	
});

	var reportList = [];

reportList.push({
	date: new Date(),
	crossStreet1: "123 fake street",
	crossStreet2: "456 not-fake street",
	status: true
});
cityList.forEach(function(city){
	city.reports = reportList;
});


db.City.remove({}, function(err, cities){

  db.City.create(cityList, function(err, cities){
    if (err) { return console.log('ERROR', err); }
    console.log("all cities:", cities);
    console.log("created", cities.length, "cites");
    process.exit();
  });

});
