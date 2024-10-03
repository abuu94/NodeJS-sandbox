//Upload Files:   The Formidable Module
/*
The Formidable module can be downloaded and installed using NPM
*/
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var url = require('url');


/*
The URL module splits up a web address into readable parts.
Inaweza kuivunja webaddress ktk vipanda vingi
*/

var url = require('url');
var adr = 'http://localhost:8080/7_Url_Module.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'