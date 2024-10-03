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



//Insert into a tb

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected !");

    var sql = "INSERT INTO baskeli (id,kabila,bei,mwezi,duka) VALUES ('', 'BMX',240000.00,'October','Pemba')";
    //Mountain Bikes, Road Bikes, Repair and Service, e-Bike, BMX

    //var sql = "INSERT INTO baskeli (id,kabila,bei,mwezi,duka) VALUES ?";
    // var values = [
    //     ['', 'Mountain Bikes', 100000.00, 'Apil', 'Unguja'],
    //     ['', 'Road Bikes', 400000.00, 'May', 'Unguja'],
    //     ['', 'e-Bike', 300000.00, 'January', 'Unguja'],
    //     ['', 'Repair and Service', 500000.00, 'March', 'Unguja'],
    //     ['', 'BMX', 600000.00, 'September', 'Unguja'],
    //     ['', 'Road Bikes', 800000.00, 'Febuary', 'Unguja'],
    //     ['', 'Mountain Bikes', 900000.00, 'August', 'Unguja'],
    //     ['', 'Road Bikes', 120000.00, 'June', 'Unguja'],
    //     ['', 'e-Bike', 430000.00, 'July', 'Unguja'],
    //     ['', 'Repair and Service', 700000.00, 'September', 'Unguja'],
    //     ['', 'BMX', 200000.00, 'November', 'Unguja'],
    //     ['', 'Road Bikes', 110000.00, 'December', 'Unguja'],
    //     ['', 'Mountain Bikes', 100000.00, 'Apil', 'Unguja'],
    //     ['', 'Road Bikes', 400000.00, 'May', 'Unguja'],
    //     ['', 'e-Bike', 300000.00, 'January', 'Unguja'],
    //     ['', 'Repair and Service', 500000.00, 'March', 'Unguja'],
    //     ['', 'BMX', 600000.00, 'September', 'Unguja'],
    //     ['', 'Road Bikes', 800000.00, 'Febuary', 'Unguja'],
    //     ['', 'Mountain Bikes', 900000.00, 'August', 'Unguja'],
    //     ['', 'Road Bikes', 120000.00, 'June', 'Unguja'],
    //     ['', 'e-Bike', 430000.00, 'July', 'Unguja'],
    //     ['', 'Repair and Service', 700000.00, 'September', 'Unguja'],
    //     ['', 'BMX', 200000.00, 'November', 'Unguja'],
    //     ['', 'Road Bikes', 110000.00, 'December', 'Unguja'],
    // ];
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result : 1 record insert Successfull, Id : " + result.insertId);
    });

});