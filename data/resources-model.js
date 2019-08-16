const db = require('./db-config');

module.exports = {
	getResources,
};

function getResources() {
	return db('resources');
}
