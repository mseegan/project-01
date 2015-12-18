var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var reportSchema = new Schema({
	date: Date,
	reportId: String,
	crossStreet1: String,
	crossStreet2: String,
	status: String

});

var Report = mongoose.model('Report', reportSchema);

module.exports = Report;