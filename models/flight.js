var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/airbookdb');

var Schema = mongoose.Schema;

var flightSchema = new Schema({
	flight_no: {type: Number, required: true, unique: true},
	flight_name: {type: String, required: true},
	from: {type: String, required: true},
	to: {type: String, required: true},
	fare: {type: Number, required: true}
});

var Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;