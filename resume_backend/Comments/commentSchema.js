const mongoose = require('mongoose');

const Words = new mongoose.Schema({
  title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Words', Words)