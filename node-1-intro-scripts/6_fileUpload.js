//Upload Files:   The Formidable Module
/*
The Formidable module can be downloaded and installed using NPM
*/
var http = require('http');

var formidable = require('formidable');

var fs = require('fs');





/*
Step 3: Save the File ktk directory unayotaka.
To move the file to the folder of your choice,
 use the File System module, and rename the file
*/

http.createServer(function (req, res) {

    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {

            // hapa napeleka file ktk folder ninalotaka
            var oldpath = files.filetoupload.filepath;
            var newpath = 'C:/Users/User/Desktop/' +
                files.filetoupload.originalFilename;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File Uploaded');
                res.end();
            });
            // res.write('File Uploaded');
            // res.end();
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('<form/>');
        return res.end();
    }
}).listen(8080);





