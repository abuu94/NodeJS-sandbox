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



//Query a db

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected !");
    //var sql = "CREATE TABLE baskeli (id INT AUTO_INCREMENT PRIMARY KEY, kabila VARCHAR(255), bei FLOAT(25,2), mwezi VARCHAR(255))";
    var sql = "ALTER TABLE baskeli ADD COLUMN duka VARCHAR(255)";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result : TB was created/altered Successfull");
    });

});