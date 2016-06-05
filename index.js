var express = require('express');
var app = express();

app.post('/', function (req, res) {
  console.log('Received request');
  console.log(req);
  res.send('Hello World!');
});


app.get('/', function (req, res) {
  console.log('received request');
  console.log(req);
  res.send('Hello world!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
