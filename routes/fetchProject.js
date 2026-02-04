// const express = require('express');
// const db = require('../config/dbConfig');
// const router=express.Router();

// // Fetch courses from database
// router.get('/getProjects', (req, res) => {
//     const sql = 'SELECT id, projectTitle, price,branch,abstract FROM projects';
//     db.query(sql, (err, results) => {
//         if (err) {
//             console.error('Error fetching courses:', err);
//             return res.status(500).json({ error: 'Database query error' });
//         }
//         const courses = results.map(course => ({
//             id: course.id,
//             title: course.projectTitle,
//             price: course.price,
//             branch: course.branch,
//             description: course.description,
//             image: `/images/projects/${course.branch}/${course.id}.jpg`
//         }));
//         res.json(courses);
//     });
// });

// module.exports = router;


const express = require('express');
const db = require('../config/dbConfig');
const router = express.Router();

router.get('/getProjects', (req, res) => {
    const sql = 'SELECT id, projectTitle, price, branch, abstract FROM projects';

    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching projects:', err);
            return res.status(500).json({ error: 'Database query error' });
        }

        const projects = results.map(p => {
            let branch = p.branch.toLowerCase();

            // 🔹 normalize branch
            if (branch.includes('cse')) branch = 'cse';
            else if (branch.includes('ece')) branch = 'ece';
            else if (branch.includes('iot')) branch = 'iot';

            return {
                id: p.id,
                title: p.projectTitle,
                price: p.price,
                branch: branch,
                abstract: p.abstract   // ✅ correct field
            };
        });

        res.json(projects);
    });
});

module.exports = router;
