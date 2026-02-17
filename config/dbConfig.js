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


// const mysql = require("mysql2");

// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   port: process.env.DB_PORT
// });

// db.connect((err) => {
//   if (err) {
//     console.error("❌ DB connection failed:", err);
//     process.exit(1); // VERY IMPORTANT for Railway
//   }
//   console.log("✅ Connected to MySQL database");
// });

// module.exports = db;


// const mysql = require("mysql2");

// const db = mysql.createConnection({
//   host: process.env.DB_HOST || "mysql.railway.internal",
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   port: process.env.DB_PORT || 3306
// });

// db.connect((err) => {
//   if (err) {
//     console.error("❌ DB connection failed:", err.message);
//     return;
//   }
//   console.log("✅ Connected to MySQL database");
// });

// module.exports = db;

// const mysql = require("mysql2");

// const db = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   port: process.env.DB_PORT,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// });

// module.exports = db;

const mysql = require("mysql2");

const db = mysql.createPool({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = db;

