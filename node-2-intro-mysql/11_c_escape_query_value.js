/*
install xampp
install mysql driver via node npm install mysql
*/

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mynodejsdb"
});

/*

Ikiwa values ni variable from user, ni bora uka escape values hizo.
Hii inaepusha SQL injection.

*/

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected !");

    var adr = 'Pemba';  // Unguja na Pemba inakbalika lakini nyengine hazikubaliki why
    var b = 1999;
    var sql = "SELECT * FROM baskeli WHERE duka= ? OR bei=? ";
    /*
  
    
    */

    con.query(sql, [adr, b], function (err, result) {
        if (err) throw err;
        console.log(result);
    });

});