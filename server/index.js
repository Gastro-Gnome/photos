const express = require('express');
const Photos = require('../database/photos.js')

const app = express();
const port = 3000;

app.use(express.static('../public'));

app.get('/', (req, res) => {
  res.end('hi');
});

app.get('/biz_photos/:businessId', (req, res) => {
  Photos.find({ business_id: req.params.businessId })
    .then(data => res.send(JSON.stringify(data)))
    .catch(err => res.send(JSON.stringify(err)));
});

app.listen(port, () => console.log(`Photos now listening on port ${port}`));
