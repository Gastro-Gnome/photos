const mongoose = require('mongoose');

// 172.17.0.2

const db = mongoose.connect('mongodb://localhost/fec', { useNewUrlParser: true });

module.exports = db;
