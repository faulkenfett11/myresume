const mongoose = require('mongoose');

const Words = new mongoose.Schema({
  title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true
	},
	createdOn: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Words', Words)