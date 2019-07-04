const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fec', { useNewUrlParser: true });

const db = mongoose.connection;

module.exports = db;
