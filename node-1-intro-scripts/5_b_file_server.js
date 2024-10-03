//Create Files:   fs.appendFile(), fs.open(), fs.writeFile()
/*
The fs.appendFile() method appends specified content to a file. If the file does not exist,
 the file will be created:
*/
var http = require('http');
var fs = require('fs');

fs.appendFile('5_b_file_server_appended.txt', 'Hello Content!',
    function (err) {
        if (err) throw err;
        console.log('Saved !');

    });


/*
The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist,
 an empty file is created:
*/
fs.open('5_b_file_server_opened.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved! ');
});

/*
The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file,
 containing the specified content, will be created:

*/
fs.writeFile('5_b_file_server_created.txt', 'Hello Content! ', function (err) {
    if (err) throw err;
    console.log('Saved!');

});