var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var reportSchema = new Schema({
	date: Date,
	crossStreet1: String,
	crossStreet2: String,
	status: Boolean

});

var Report = mongoose.model('Report', reportSchema);

module.exports = Report;