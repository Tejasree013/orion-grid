const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const signupRoutes = require('./routes/signUpRoutes');
const forgotpasswordRoute = require('./routes/forgotPasswordRoutes');
const loginStudentRoute = require('./routes/loginStudentRoute');
const facultyloginRoute = require('./routes/facultyLoginRoute');
const fetchCourses = require('./routes/fetchCourses');
const fetchInternships = require('./routes/fetchInternships');
const addNewInternship = require('./routes/addNewInternship');
const courseRoutes = require('./routes/addNewCourse');
const workshopRoutes = require('./routes/fetchWorkshops');
const addNewWorkshop = require('./routes/addNewWorkshop');
const fetchProjects = require('./routes/fetchProject');
const addNewProject = require('./routes/addNewProject');
const coursePaymentRoute = require('./routes/coursepaymentsRoute');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// Routes
app.use('/api', signupRoutes);
app.use('/api/forgotpassword', forgotpasswordRoute);
app.use('/api/loginStudents', loginStudentRoute);
app.use('/api/facultyLogin', facultyloginRoute);
app.use('/api/fetch', fetchCourses);
app.use('/api/fetchInterns', fetchInternships);
app.use('/api/courses', courseRoutes);
app.use('/api/interns', addNewInternship);
app.use('/api/workshop', workshopRoutes);
app.use('/api/workshopsadd', addNewWorkshop);
app.use('/api/fetchProjects', fetchProjects);
app.use('/api/addProjects', addNewProject);
app.use('/api/addCoursePaymentRoute', coursePaymentRoute);

// Health check (Railway)
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Root route
app.get('/', (req, res) => {
  res.status(200).send('Orion Grid backend is running 🚀');
});

// Start server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


const PORT = Number(process.env.PORT);

if (!PORT) {
  console.error("❌ PORT not provided by Railway");
  process.exit(1);
}

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on port ${PORT}`);
});
