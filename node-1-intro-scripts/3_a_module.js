/*
Ni f(x) nyingi zinazoingizwa katika app.
Kuna baadhi yake ni built-in ila nyengine hadi uinstall.
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(' Hii ndio Built In module inafanya kazi ya kuamsha Server');
}).listen(8080);
*/

//My module

// Use the exports keyword to make properties and methods available outside the module file.
exports.myDateTime = function () {
    return Date();
};