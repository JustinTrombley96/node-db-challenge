const db = require('./db-config');

module.exports = {
	getTasks,
};

function getTasks() {
	return db('tasks');
}
