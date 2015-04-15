var http = require('http');

var urls = [process.argv[2], process.argv[3], process.argv[4]];
var bl = require('bl');
var res = new Array();
var l = 0;

for(var i = 0; i < urls.length; i++) {
    (function(i) {
        http.get(urls[i], function (response) {
            var str = '';
            response.setEncoding('utf8');
            response.on('data', function (data) {
                //console.log(data);
                str += data.toString();
                //l += data.toString().length;
                //data.pipe(bl(function (err, data) {
                //    str += data.toString();
                //}))
            });
            response.on('error', console.error);
            response.on('end', function () {
                res[i] = str;
                var cnt=0;
                for (j=0; j<res.length; j++) {
                    (res[j] != null) ? cnt++ : false;
                }
                if(cnt == res.length) {
                    for(j=0; j<res.length; j++) {
                        console.log(res[j]);
                    }
                }
            });
        });
    })(i);
}

//function printResults () {
//    for (var i = 0; i < 3; i++)
//        console.log(results[i])
//}
//
//function httpGet (index) {
//    http.get(process.argv[2 + index], function (response) {
//        response.pipe(bl(function (err, data) {
//            if (err)
//                return console.error(err)
//
//            results[index] = data.toString()
//            count++
//
//            if (count == 3)
//                printResults()
//        }))
//    })
//}
//
//for (var i = 0; i < 3; i++)
//    httpGet(i)