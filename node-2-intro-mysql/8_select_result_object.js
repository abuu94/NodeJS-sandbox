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



//Select from  tb

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected !");

    var sql = "SELECT kabila,bei FROM baskeli";

    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        console.log(result[5].kabila);
    });

});