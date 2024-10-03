var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Server ya Nodejs Imewashwa , ipo tayri kufanya KAzi');
}).listen(8080);