const db = require('./index.js');
const mongoose = require('mongoose');
const { promisify } = require('util');
const sampleData = require('./sampleData');
const restaurants = require('./resaurants');
const Photo = require('./Photos');

const insertManyAsync = promisify(Photo.insertMany);

const insert = () => {
  let insertions = [];
  let entry = {};
  for (let i = 0; i < sampleData.length; i++) {
    let batch = [];
    let data = sampleData[i];
    for (let j = 0; j < restaurants.length; j++) {
      let restaurant = restaurants[j];
      entry = {};
      Object.assign(entry, data);
      entry.business_id = restaurant;
      batch.push(entry);
    }
    insertions.push(Photo.insertMany(batch));
  }
  return Promise.all(insertions);
};

const seed = async () => {
  const insertion = await insert();
  mongoose.disconnect();
};

seed();

// mongoose.disconnect();
