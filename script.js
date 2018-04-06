var port = 1000;
var folder = 'site';

var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, folder)));

app.listen(port);

console.log('http://localhost:1000');