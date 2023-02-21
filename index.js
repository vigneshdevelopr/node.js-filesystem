
const express = require('express');
const fs = require('fs');
const app = express();

app.get('/timestamp', (req, res) => {
  const timestamp = new Date().toISOString();
  fs.appendFile('date-time.txt', timestamp + '\n', (err) => {
    if (err) throw err;
    console.log('Appended timestamp to date-time.txt');
  });
  res.json({ timestamp });
});

app.listen(3000, () => {
  console.log('Timestamp API listening on port 3000!');
});
