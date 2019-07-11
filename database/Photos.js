const mongoose = require('mongoose');
const db = require('./index.js');

const photoSchema = new mongoose.Schema({
  business_id: String,
  photo_id: { type: String, unique: true },
  user_id: String,
  user_photo_id: String,
  caption: String,
  label: String,
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;
