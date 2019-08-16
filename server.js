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



module.exports = server;
