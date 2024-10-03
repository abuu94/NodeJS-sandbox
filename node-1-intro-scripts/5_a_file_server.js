//Node.js as a File Server
// fs.readFile() methods inavuta file from computer
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    fs.readFile('5_a_file_server.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8080);