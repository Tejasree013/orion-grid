// const express = require('express');
// const db = require('../config/dbConfig');
// const router=express.Router();

// // Fetch courses from database
// router.get('/getworkshops', (req, res) => {
//     // const sql = 'SELECT id, name,branch,startDate,description FROM workshops';
//     const sql = 'SELECT id, title, branch, description FROM workshops';
//     db.query(sql, (err, results) => {
//         if (err) {
//             console.error('Error fetching courses:', err);
//             return res.status(500).json({ error: 'Database query error' });
//         }
//         const courses = results.map(course => ({
//             id: course.id,
//             title: course.name,
//             branch: course.branch,
//             // startDate: course.startDate,
//             description: course.description,
//             // image: `/images/workshops/${course.branch}/${course.id}.jpg`
//         }));
//         res.json(courses);
//     });
// });

// module.exports = router;



//  modified one



const express = require('express');
const db = require('../config/dbConfig');

const router = express.Router();

router.get('/getworkshops', (req, res) => {
  const sql = 'SELECT id, title, branch, description FROM workshops';

  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'DB error' });
    }

    const workshops = results.map(w => ({
      id: w.id,
      title: w.title,
      branch: w.branch,
      description: w.description,
      image: `/images/workshops/${w.branch}/${w.id}.jpg`
    }));

    res.json(workshops);
  });
});

module.exports = router; 

