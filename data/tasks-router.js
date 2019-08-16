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
router.post('/', (req, res) => {
	const task = req.body;
	tasks
        .addTask(task)
		.then(task => {
			console.log(task);
			res.status(200).json(task);
		})
		.catch(err => {
			res.status(500).json({ message: 'error' });
		});
});

module.exports = router;
