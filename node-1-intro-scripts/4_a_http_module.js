var http = require('http');

//create a server object:
http.createServer(function (req, res) {
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080


//  HTTP Header: inarudisha html ikiwa webpages , au plain ikiwa normal text
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello World!');
    res.end();
}).listen(8080);

//Read the Query String
/*
The function passed into the http.createServer() has a req argument that represents the request from the client,
 as an object (http.IncomingMessage object).

 url ni property ya object ambayo ina hold sehemu ya
 url inayokuja baada ya domain name
*/
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(req.url);
    res.end();
}).listen(8080);

//unakachoandika baada ya localhost:8080/text kitavutwa na kuoneshwa

