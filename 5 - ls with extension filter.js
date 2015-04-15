var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, function callback(err, list){
    if (err) {
        throw err;
    } else {
        for(var i=0; i<list.length; i++) {
            //console.log (path.extname(list[i]));
            if (path.extname(list[i]) == "."+ext) {
                console.log(list[i]);
            }
        }
    }
});