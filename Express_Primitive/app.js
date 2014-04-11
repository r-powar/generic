var express = require('express');
var app = express();

app.get('/', function(req, res){
  //res.send('hello world');
  res.json(200, {
  	id: 22,
  	name: 'Raj'

  });
});

app.listen(3000);