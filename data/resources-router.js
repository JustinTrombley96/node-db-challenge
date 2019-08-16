const express = require('express');

const resources = require('./resources-model');

const router = express.Router();

router.get('/', (req, res) => {
	resources
		.getResources()
		.then(resources => {
			res.status(200).json(resources);
		})
		.catch(err => {
			res.status(500).json({ message: 'error' });
		});
});

module.exports = router;
