var express = require('express');
var pg = require('pg');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

//export CON_STRING="postgres://user:password@localhost/dbname"

var con = process.env.CON_STRING;
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
var arr = JSON.parse(require('fs').readFileSync('out.json'));

app.post('/', function (req, res) {
  console.log('Received push request');
  arr.push(req.body);
  var fs = require('fs');
  fs.writeFile('out.json', JSON.stringify(arr, null, 4), function(err) {
    if(err) { console.error('err', err); }
  });
   
 
  res.send('Hello World!');
});


app.get('/', function (req, res) {
  console.log('received get request');
  var ret = require('fs').readFileSync('out.json');
  res.send(ret);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
