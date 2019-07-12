const db = require('./index.js');
const sampleData = require('./sampleData');
const Photo = require('./photos');

const seed = () => {
  Photo.insertMany(sampleData)
    .then(() => console.log('success'))
    .catch(err => console.log(err));
};

seed();
