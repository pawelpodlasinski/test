var path = require('path');
var express = require('express');
var stylus = require('stylus');
var app = express();
var port = process.argv[2];
var css = process.argv[3];

app.use(require('stylus').middleware(css || path.join(__dirname, '/public')));
app.use(express.static(css || path.join(__dirname, 'public')));

app.listen(port);

//var express = require('express')
//var app = express()
//
//app.use(require('stylus').middleware(process.argv[3]));
//app.use(express.static(process.argv[3]));
//
//
//app.listen(process.argv[2])