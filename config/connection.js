// Set up MySQL connection.
require("dotenv").config();

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "lg7j30weuqckmw07.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "vz5eqig1fiq23z2l",
  password: "b3hobzp6e9qdtojr",
  database: "cth1rntue5pn8272"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;