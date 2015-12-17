// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
// generate a new express app and call it 'app'
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));


var db = require("./models");

/*
 * HTML Endpoints
 */

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});
app.get('/city', function citypage (req, res){
	res.sendFile(__dirname + '/views/city.html');
});

app.get('/city/:id', function (req, res){
  res.sendFile(__dirname + '/views/cities/show.html');
});

// API Endpoints

app.get('/api', function api_index (req, res){
  res.json({
    message: "Welcome Message",
    endpoints: [
      {method: "GET", path: "/api", description: "List of Potholes, their locations, and status"}
    ]
  });
});
//read all cities
app.get('/api/city', function showCity(req, res){
  db.City.find({}, function(err, city){
    if(err){console.log(err);}
    console.log("\nCity Returned: " , city);
    res.json(city);
  });
  
});
//read one city
app.get('/api/city/:id', function showOneCity(req, res){
	console.log('requested city id=', req.params.id);
  db.City.findOne({_id: req.params.id}, function(err, city) {
    res.json(city);
  });
  
});

//create a city
app.post('/api/city', function cityCreate(req, res) {
  console.log('body', req.body);

  db.City.create(req.body, function(err, city) {
    if (err) { console.log('error', err); }
    console.log(city);
    res.json(city);
  });

});




//read all reports
app.get('/api/city/:id/report', function showOneCity(req, res){
	
  db.City.findOne({_id: req.params.id}, function(err, city) {
    res.json(city.reports);
  });
  
});

//create a report
app.post('/api/city/:cityId/report', function createReport (req, res){
  console.log("YOU HIT POST!");
  var myId = req.params.cityId;
  var body = req.body;
  console.log("myId", myId);
  console.log("body should be an obj", body);
  res.send("okay!");
    // db.City.findOne({_id: req.params.cityId}, function(err, city){
    //   if (err) { console.log('error', err); }
    //   var report = new db.Report(req.body);
    //   city.report.push(report);
    //   city.save(function(err, savedCity){
    //     if (err) { console.log('error', err); }
    //     console.log('city with new report saved', savedCity);
    //   res.json(report);
    //   });
    // });
  
});
//update a report

//destroy a report



app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
