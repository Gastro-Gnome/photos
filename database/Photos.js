const mongoose = require('mongoose');
const db = require('./index.js');

const photoSchema = new mongoose.Schema({
  business_id: String,
  photo_id: String,
  caption: String,
  label: String,
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;
