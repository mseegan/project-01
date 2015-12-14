var mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/project-01');
var city = require('./city');
var report = require('./report'); 

module.exports.report = report;
module.exports.report = report;
