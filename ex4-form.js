var path = require('path')
var express = require('express')
var app = express();
var port = process.argv[2];

var bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended: false}))

app.post('/form', function(req, res) {
    var abc = req.body.str.split('').reverse().join('')
    res.end(abc)
});

app.listen(port);
