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

    var adr = 'Mwanza';  // Unguja na Pemba inakbalika lakini nyengine hazikubaliki why
    var sql = "SELECT * FROM baskeli WHERE duka=" + mysql.escape(adr);
    /*
  
    
    */

    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });

});