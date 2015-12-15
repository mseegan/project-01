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


// API Endpoints

app.get('/api', function api_index (req, res){
  res.json({
    message: "Welcome Message",
    endpoints: [
      {method: "GET", path: "/api", description: "List of Potholes, their locations, and status"}
    ]
  });
});

app.get('/api/city', function showCity(req, res){
  db.City.find({}, function(err, city){
    if(err){console.log(err);}
    res.json(city);
  });
  
});


app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
