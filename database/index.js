const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/fec', { useNewUrlParser: true });

module.exports = db;
