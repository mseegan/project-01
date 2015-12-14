var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var report = require('./report');

var citySchema = new Schema({
	State: String,
	reports: [report.schema]
});

var city = mongoose.model('city', citySchema);

module.exports = city;