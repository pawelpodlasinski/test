var fs = require('fs');
var path = require('path');
var tmp = [];

module.exports = function (dir, ext, callback) {

    fs.readdir(dir, function (err, list) {
        if (err) {
            callback(err, null);
        } else {
            for (var i = 0; i < list.length; i++) {
                if (path.extname(list[i]) == "." + ext) {
                    tmp.push(list[i]);
                    //console.log(list[i]);
                }
            }

            callback(null, tmp);
        }
    });
};



//module.exports = function(dirname, ext, callback) {
//    var extension = "." + ext;
//    fs.readdir(dirname, function(err, files) {
//        if (err) {
//            callback(err, null);
//        }
//        else {
//            result = [];
//            files.forEach(function(entry) {
//                if (path.extname(entry) == extension) {
//                    result.push(entry);
//                }
//            });
//            callback(null, result);
//        }
//    });
//
//};