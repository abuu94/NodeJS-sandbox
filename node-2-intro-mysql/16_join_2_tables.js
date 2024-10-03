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
    /*
    var sql = "SELECT wauzaji.jina AS muuzaji, baskeli.kabila AS bidhaa FROM wauzaji 
    JOIN baskeli ON wauzaji.baskeli_id = baskeli.baskeli_id";
    */

    /*
    left join: Anataka kuwaona waozaji wote ikiwa kauza au hajauza
    SELECT users.name AS user, products.name AS favorite FROM users
    LEFT JOIN products ON users.favorite_product = products.id
    */

    /*
    right join: kuziona baskeli zote, ikiwa zimepatwa kuuzwa by muuzaji au
    hazikuuzwa.

    SELECT users.name AS user,
    products.name AS favorite
    FROM users
    RIGHT JOIN products ON users.favorite_product = products.id
    */

    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);

    });

});


/*
Ikiwa unafuta table ambalo lishafutwa tayari tumia IF EXISTS keyword
*/