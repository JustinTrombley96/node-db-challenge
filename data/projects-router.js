const express = require('express');

const projects = require('./projects-model');

const router = express.Router();

router.get('/', (req, res) => {
	projects
		.getProjects()
		.then(projects => {
			res.status(200).json(projects);
		})
		.catch(err => {
			res.status(500).json({ message: 'error' });
		});
});
router.post('/', (req, res) => {
	const project = req.body;
	projects
        .addProject(project)
		.then(project => {
			console.log(project);
			res.status(200).json(project);
		})
		.catch(err => {
			res.status(500).json({ message: 'error' });
		});
});


module.exports = router;
