var express = require('express');
var app = express();

app.get ('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {
  var host = server.address('159.203.82.122').address;
  var port = server.address('3000').port;

  console.log('Example app listening at http://%s:%s', host, port);
});

