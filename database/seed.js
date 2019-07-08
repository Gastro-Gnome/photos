const db = require('./index.js');
const Photo = require('./photos.js');

const sampleData = [
  {
    business_id: 'abc123',
    photo_id: '0001',
    caption: 'The famous Hearst Pizza!!!',
    label: 'food',
  },
  {
    business_id: 'abc123',
    photo_id: '0002',
    caption: 'Pastrami & Peppers',
    label: 'food',
  },
  {
    business_id: 'abc123',
    photo_id: '0003',
    caption: 'Shrimp Salad Sando',
    label: 'food',
  },
  {
    business_id: 'abc123',
    photo_id: '0004',
    caption: 'Interior',
    label: 'interior',
  },

];

const seed = () => {
  Photo.insertMany(sampleData)
    .then(() => console.log('success'))
    .catch(err => console.log(err));
};

seed();
