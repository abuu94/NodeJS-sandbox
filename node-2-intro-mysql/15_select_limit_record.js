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

    var sql = "SELECT * FROM baskeli LIMIT 2";
    //var sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";
    //var sql = "SELECT * FROM customers LIMIT  2,5";

    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);

    });

});


/*
Ikiwa unafuta table ambalo lishafutwa tayari tumia IF EXISTS keyword
*/