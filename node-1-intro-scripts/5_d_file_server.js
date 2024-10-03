//Delete Files:   fs.unlink()
/*
The fs.unlink() method deletes the specified file:
*/
var http = require('http');
var fs = require('fs');

fs.unlink('5_b_file_server_opened.txt', function (err) {
    if (err) throw err;
    console.log('File Deleted')
});