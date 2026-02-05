// const mysql = require('mysql2');

// // MySQL Connection
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '', // Update with your MySQL password
//   database: 'oriongrid', // Update with your database name
// });

// // Connect to Database
// db.connect((err) => {
//   if (err) throw err;
//   console.log('Connected to MySQL database.');
// });

// module.exports = db;


const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "oriongrid",
  port: process.env.DB_PORT || 3306
});

db.connect((err) => {
  if (err) {
    console.error("DB connection failed:", err.message);
    return;
  }
  console.log("Connected to MySQL database");
});

module.exports = db;
