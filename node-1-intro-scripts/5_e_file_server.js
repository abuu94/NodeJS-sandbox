//Rename Files:   fs.rename()
/*
The fs.rename() method renames the specified file:
*/
var http = require('http');
var fs = require('fs');

fs.rename('oldname.txt', 'newname.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed')
});