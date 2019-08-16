const express = require('express');
const helmet = require('helmet');
const db = require('./data/db-config.js');
const projectsRouter = require('./data/projects-router');
const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/projects', projectsRouter);

router.get('/', (req, res) => {
	projects
		.getProjects()
		.then(recipes => {
			res.status(200).json(projects);
		})
		.catch(err => {
			res.status(500).json({ message: 'error' });
		});
});

// router.get('/:id/ingredients', (req, res) => {
// 	const { id } = req.params;
// 	projects
// 		.getShoppingList(id)
// 		.then(ingredients => {
// 			res.status(200).json(ingredients);
// 		})
// 		.catch(err => {
// 			res.status(500).json({ message: 'failed to get ingredients' });
// 		});
// });

module.exports = server;
