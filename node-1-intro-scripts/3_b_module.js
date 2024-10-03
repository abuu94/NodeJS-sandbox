/*
Naivuta module ya 3_a_module.js ambayo imetengeneza Date
*/


var http = require('http');
var dt = require('./3_a_module');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Tarehe na muda wa sasa ni : ' +
        dt.myDateTime());
    res.end();
}).listen(8080);