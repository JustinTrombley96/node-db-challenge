const express = require('express');

const tasks = require('./tasks-model');

const router = express.Router();

router.get('/', (req, res) => {
	tasks
		.getTasks()
		.then(tasks => {
			res.status(200).json(tasks);
		})
		.catch(err => {
			res.status(500).json({ message: 'error' });
		});
});

module.exports = router;
