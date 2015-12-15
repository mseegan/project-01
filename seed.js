var db = require("./models");

var cityList = [
	{
	State: "California",
	Name: "San Francisco",
	
},
{
	State: "California",
	Name: "San Francisco",
	
}
];


db.City.remove({}, function(err, cities){

  db.City.create(cityList, function(err, cities){
    if (err) { return console.log('ERROR', err); }
    console.log("all cities:", cities);
    console.log("created", cities.length, "cites");
    process.exit();
  });

});
