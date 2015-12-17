var mongoose = require('mongoose');
  mongoose.connect( process.env.MONGOLAB_URI ||
                      process.env.MONGOHQ_URL || 
                      "mongodb://localhost/project-01" );
var city = require('./city');
var report = require('./report'); 



module.exports.City = city;
module.exports.Report = report;



