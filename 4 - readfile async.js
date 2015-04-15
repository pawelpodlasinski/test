var fs = require('fs');
var fileName = process.argv[2];

var content;
// First I want to read the file
fs.readFile(fileName, function read(err, data) {
    if (err) {
        throw err;
    }
    content = data;

    processFile();
});

function processFile() {
    var str = content.toString();
    var split = str.split("\n");
    console.log(split.length-1);
}