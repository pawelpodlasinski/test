var express = require('express');
var app = express();
var fs = require('fs');
var port = process.argv[2];
var fileName = process.argv[3];

app.get('/books', function(req, res){
    fs.readFile(fileName, function read(err, data) {
        if (err) {
            throw err;
        }

        res.json( JSON.parse(data) );
    });
});

app.listen(port);

