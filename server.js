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
app.get('/api/city/:id/report', function showAllReports(req, res){
	
  db.City.findOne({_id: req.params.id}, function(err, city) {
    res.json(city.reports);
  });
  
});
//read one report
app.get('/api/city/:cityId/report/:id', function showOneReport(req, res){
  db.City.findById({_id: req.params.cityId}, function(err, city){
    var report = city.reports.id(req.params.id);
    console.log(report);

    
  });
});


//create a report
app.post('/api/city/:cityId/report', function createReport (req, res){
  
  var cityId = req.params.cityId;
  var newReport = new Report(req.body.reports);
  db.City.findOne({_id: cityId}, function (err, foundCity){
    foundCity.reports.push(newReport);
    foundCity.save(function (err, savedCity){
      res.json(newReport);
    });
  });
  
  
});
//update a report
app.put('/api/city/:cityId/report/:id', function (req, res){
  var cityId = req.params.cityId;
  var reportId = req.params.id;

 db.city.findOne({_id: cityId}, function (err, foundCity){
  var foundReport = foundCity.reports.id(reportId);

  foundReport.text = req.body.report.text;
  foundReport.completed = req.body.report.completed;
  foundCity.save(function (err, savedCity){
    res.json(foundCity);
  });
 });
});
//destroy a report
app.delete('/api/city/:cityId/report/:id', function (req, res) {
  var listId = req.params.cityId;
  var reportId = req.params.id;

  db.city.findOne({_id: cityId}, function (err, foundCity){
    var foundReport = foundCity.reports.id(reportId);
    foundReport.remove();
    foundCity.save(function (err, savedList){
      res.json(foundCity);
    });
  });
});


app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
