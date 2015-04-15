var http = require('http');
var path = process.argv[2];
var bl = require('bl')
var str = '';
var l = 0;

http.get(path, function (response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
        //console.log(data);
        str += data.toString();
        l += data.toString().length;
        //data.pipe(bl(function (err, data) {
        //    str += data.toString();
        //}))
    });
    response.on('error', console.error);
    response.on('end', function() {
        console.log(l);
        console.log(str);
    });
});

//http.get(path, function (response) {
//    response.pipe(bl(function (err, data) {
//        if (err)
//            return console.error(err)
//        data = data.toString()
//        console.log(data.length)
//        console.log(data)
//    }))
//})