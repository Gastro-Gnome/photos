const db = require('./index.js');
const mongoose = require('mongoose');
const sampleData = require('./sampleData');
const Photo = require('./Photos');

const seed = () => {
  let extraData = [];
  for (let i = 0; i < 10; i += 1) {
    extraData = extraData.concat(sampleData);
  }
  // for (let i = 0; i < extraData.length; i += 1) {
  //   extraData[i].photo_id = i.toString();
  // }
  Photo.insertMany(extraData)
    .then(() => {
      console.log('success');
      mongoose.disconnect();
    })
    .catch(err => console.log(err));
};

seed();

// mongoose.disconnect();
