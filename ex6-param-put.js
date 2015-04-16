var express = require('express');
var app = express();
var crypto = require('crypto');
var port = process.argv[2];
var css = process.argv[3];

app.put('/message/:NAME', function(req, res){
    var id = req.params.NAME

    res.end(crypto
        .createHash('sha1')
        .update(new Date().toDateString() + id)
        .digest('hex'));
});

app.listen(port);

