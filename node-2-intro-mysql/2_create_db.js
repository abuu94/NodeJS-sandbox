/*
install xampp
install mysql driver via node npm install mysql
*/

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});



//Query a db

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected !");
    sql = "CREATE DATABASE myNodeJsDb";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result : Db was created Successfull");
    });

});