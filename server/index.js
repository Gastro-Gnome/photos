const express = require('express');

const app = express();
const port = 3000;

app.use(express.static('../public'))

app.get('/', (req, res) => {
  res.end('hi');
});

app.listen(port, () => console.log(`Photos now listening on port ${port}`));
