var paramsCnt = process.argv.length - 2;
var sum = 0;

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}


for( var i=0; i < paramsCnt; i++) {
    //console.log(process.argv[i+2]);
    //sum += process.argv[i+2] * 1;
    sum += isNumeric(process.argv[i+2]) ? (process.argv[i+2]*1) : 0;
}
console.log(sum);

