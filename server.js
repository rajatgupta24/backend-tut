var fs = require('fs');
var myApp = require('./myApp');

var express = require('express');
var app = express();

app.use('/public', express.static(process.cwd() + '/public'));
  
app.route('/').get(function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
})

app.listen(process.env.PORT);
