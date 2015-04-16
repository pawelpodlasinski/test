var express = require('express');
var app = express();
var port = process.argv[2];

app.get('/search', function(req, res){
    res.send(req.query);
    res.end();
});

app.listen(port);

