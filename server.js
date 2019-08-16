const express = require('express');
const helmet = require('helmet');
const db = require('./data/db-config.js');
const projectsRouter = require('./data/projects-router');
const resourcesRouter = require('./data/resources-router');
const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);

module.exports = server;
