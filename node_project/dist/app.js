"use strict";

var express = require('express');

var app = module.exports = express();

app.get('/', function (req, res) {
  res.send('hi');
});
var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log("App listening on port ".concat(PORT));
  console.log("Press Ctrl+C to quit. App Mode: ".concat(global.APP_MODE));
});
