var express = require('express');
var pg = require('pg');

//export CON_STRING="postgres://user:password@localhost/dbname"

var con = process.env.CON_STRING;
var app = express();



app.post('/', function (req, res) {
  console.log('Received request');
  console.log(req);
  pg.connect(con, function(err, client, done) {
    if(err) {
      return console.error('error client pool', err);
    }
    else {
      console.log('success psql');
    }
  });
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
