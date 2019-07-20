const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://database/fec', { useNewUrlParser: true });

module.exports = db;
