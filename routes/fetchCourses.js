// // const express = require('express');
// // const db = require('../config/dbConfig');
// // const router=express.Router();

// // // Fetch courses from database
// // router.get('/getcourses', (req, res) => {
// //     const sql = 'SELECT id, title, price, branch, description, syllabus FROM courses';
// //     db.query(sql, (err, results) => {
// //         if (err) {
// //             console.log("Courses table missing - skipping");
// //             return res.json([]);
// //         }
// //         const courses = results.map(course => ({
// //             id: course.id,
// //             title: course.title,
// //             price: course.price,
// //             branch: course.branch,
// //             description: course.description,
// //             syllabus: course.syllabus,
// //             image: `/images/courses/${course.branch}/${course.id}.jpg`
// //         }));
// //         res.json(courses);
// //     });
// // });

// // module.exports = router;


// const express = require('express');
// const db = require('../config/dbConfig');
// const router = express.Router();

// router.get('/', (req, res) => {
//   const sql = 'SELECT id, title, price, branch, description, syllabus FROM courses';
//   db.query(sql, (err, results) => {
//     // if (err) {
//     //   console.log("Courses table missing - skipping");
//     //   return res.json([]);
//     // }
//     if (err) {
//   console.error("DB ERROR:", err);
//   return res.status(500).json({ error: err.message });
// }


//     const courses = results.map(course => ({
//       id: course.id,
//       title: course.title,
//       price: course.price,
//       branch: course.branch,
//       description: course.description,
//       syllabus: course.syllabus,
//       image: `/images/courses/${course.branch}/${course.id}.jpg`
//     }));

//     res.json(courses);
//   });
// });

// module.exports = router;


const express = require('express');
const db = require('../config/dbConfig');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const sql = 'SELECT id, title, price, branch, description, syllabus FROM courses';

    const [results] = await db.promise().query(sql);

    const courses = results.map(course => ({
      id: course.id,
      title: course.title,
      price: course.price,
      branch: course.branch,
      description: course.description,
      syllabus: course.syllabus,
      image: `/images/courses/${course.branch}/${course.id}.jpg`
    }));

    res.json(courses);

  } catch (err) {
    console.error("DB ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
