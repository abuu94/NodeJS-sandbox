/*
The NPM program is installed on your computer when you install Node.js.
Ina packages nyingi sana.
Modules are JavaScript libraries you can include in your project.

Mfano : npm install upper-case
Create a Node.js file that will convert the output "Hello World!" into upper-case letters
*/

var http = require('http');
var uc = require('./node_modules/upper-case');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(uc.upperCase("egaz zanzibar!"));
    res.end();
}).listen(8080);