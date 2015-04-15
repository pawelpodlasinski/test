var fs = require('fs');
var fileName = process.argv[2];

var content = fs.readFileSync(fileName, 'utf8');

var split = content.split("\n");
console.log(split.length-1);
