const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

app.use(express.static("src"));

app.listen(port);
console.log('Server started at http://localhost:' + port);

module.exports = app;