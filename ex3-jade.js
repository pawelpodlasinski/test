var path = require('path')
var express = require('express')
var app = express();
var port = process.argv[2];

//app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, '.'));//templates
app.set('view engine', 'jade');

app.get('/home', function(req, res) {
    res.render('ex3-jade', {date: new Date().toDateString()})
});

app.listen(port);
