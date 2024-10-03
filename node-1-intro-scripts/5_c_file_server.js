//Update Files:   fs.appendFile(), fs.writeFile()
/*
The fs.appendFile() method appends specified content to a file. If the file does not exist,
 the file will be created:
*/
var http = require('http');
var fs = require('fs');

fs.appendFile('5_b_file_server_appended.txt', 'Updated Content!',
    function (err) {
        if (err) throw err;
        console.log('Updated !');

    });

/*
The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file,
 containing the specified content, will be created:

*/
fs.writeFile('5_b_file_server_created.txt', 'Add Content! ', function (err) {
    if (err) throw err;
    console.log('Replaced!');

});