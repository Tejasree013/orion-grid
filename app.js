// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const fileUpload = require('express-fileupload');

// const app = express();

// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(fileUpload());

// // health check
// app.get('/health', (req, res) => {
//   res.status(200).send('OK');
// });

// // root
// app.get('/', (req, res) => {
//   res.status(200).send('Orion Grid backend is running 🚀');
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, '0.0.0.0', () => {
//   console.log(`Server running on port ${PORT}`);
// });



console.log("APP STARTING...");

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');

// 🔹 IMPORT ROUTES
const fetchCourses = require('./routes/fetchCourses');
const fetchWorkshops = require('./routes/fetchworkshop');

const app = express();

// 🔹 MIDDLEWARE
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// 🔹 API ROUTES
app.use('/api/fetch', fetchCourses);
app.use('/api/workshop', fetchWorkshops);

// 🔹 HEALTH CHECK (Railway needs this)
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// 🔹 ROOT ROUTE
app.get('/', (req, res) => {
  res.status(200).send('Orion Grid backend is running 🚀');
});

// 🔹 START SERVER
// const PORT = process.env.PORT || 3000;
// // app.listen(PORT, '0.0.0.0', () => {
// //   console.log(`Server running on port ${PORT}`);
// // });
// // app.listen(process.env.PORT || 3000, () => {
// //   console.log("Server running...");
// // });
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const PORT = process.env.PORT || 3000;
console.log("REACHING LISTEN...");
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});