var net = require('net');
var port = process.argv[2];

var server = net.createServer(function (socket) {

    var date = new Date();
    var output = date.getFullYear() + "-" + addZeroToShortNumbers(date.getMonth()+1) + "-" + addZeroToShortNumbers(date.getDate()) + " " + addZeroToShortNumbers(date.getHours()) + ":" + addZeroToShortNumbers(date.getMinutes());

    socket.write(output);
    socket.end();
});
server.listen(Number(port));

function addZeroToShortNumbers(number) {
    console.log(number);
    if (number < 10) {
        console.log('+');
        return "0" + number;
    }

    return number;
}