const mongoose = require('mongoose');
const db = require('./index.js');

// { type: String, unique: true }

const photoSchema = new mongoose.Schema({
  business_id: String,
  photo_id: String,
  user_id: String,
  user_photo_id: String,
  caption: String,
  label: String,
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;
