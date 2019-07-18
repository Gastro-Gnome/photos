const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://database/fec', { useNewUrlParser: true, server: { reconnectTries: Number.MAX_VALUE } });

module.exports = db;
