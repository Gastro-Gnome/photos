const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.end();
});

app.listen(port, () => console.log(`Photos now listening on port ${port}`));
