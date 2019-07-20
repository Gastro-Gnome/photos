const express = require('express');
const path = require('path');
const Photos = require('../database/Photos.js');

const app = express();
const port = 3000;

app.use('/:businessId', express.static(path.join(__dirname, '../public')));
app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.end();
});

app.get('/:businessId/photos', (req, res) => {
  console.log('get', req.params.businessId);
  Photos.find({ business_id: req.params.businessId })
    .then(data => res.send(JSON.stringify(data)))
    .catch(err => res.send(JSON.stringify(err)));
});

app.listen(port, () => console.log(`Photos now listening on port ${port}`));
