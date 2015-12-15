var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Report = require('./report');

var citySchema = new Schema({
	State: String,
	Name: String,
	reports: [Report.schema]
});

var City = mongoose.model('City', citySchema);

module.exports = City;