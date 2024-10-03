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
    var sql = "DELETE FROM baskeli WHERE duka='Pemba' ";
    // var sql = "DROP TABLE baskeli";
    //var sql = "DROP TABLE IF EXISTS baskeli";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("No of records ddeleted : " + result.affectedRows);
        //console.log("Table deleted");
    });

});


/*
Ikiwa unafuta table ambalo lishafutwa tayari tumia IF EXISTS keyword
*/