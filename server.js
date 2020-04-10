const express = require('express');
const log = console.log;

const app = express();

app.get('/', (req, res) => {
  res.send('hello world, API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  log(`server is up on port ${PORT}`);
});

log('github commited page');
