var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var reportSchema = new Schema({
	date: Date,
	crossStreet1: String,
	crossStreet2: String,
	votes: Array,

});

var report = mongoose.model('report', reportSchema);

module.exports = report;