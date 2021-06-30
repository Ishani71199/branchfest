require('dotenv').config()

var mysql = require("mysql");


var connection = mysql.createConnection({
  host: process.env.HOST,
  user:process.env.USER,
  password: process.env.DBPASSWORD,
  database: process.env.DBNAME,
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;
