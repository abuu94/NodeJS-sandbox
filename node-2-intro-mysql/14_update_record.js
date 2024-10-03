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
    var sql = "UPDATE  baskeli SET duka = 'Pemba' WHERE id=10 ";

    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated.");

    });

});


/*
Ikiwa unafuta table ambalo lishafutwa tayari tumia IF EXISTS keyword
*/