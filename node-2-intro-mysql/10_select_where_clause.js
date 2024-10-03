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
So kila column unaoneshwa as object na unaonshwa details zake like metadata
*/

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected !");

    var sql = "SELECT * FROM baskeli WHERE duka='Pemba'";
    /*
    var sql ="SELECT * FROM baskeli WHERE kabila LIKE 'S%'";
    
    */

    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });

});