exports.seed = function(knex) {
	return knex('tasks').insert([
		{
			project_id  : '1',
			task_description : 'boop',
			notes       : 'Make sure you get the right boop',
			completed   : false,
		},
		{
			project_id  : '2',
			task_description : 'Mango',
			notes       : 'Make sure to shake it',
			completed   : false,
		},
		{
			project_id  : '3',
			task_description : 'Cockroaches',
			notes       : 'They survived the nukes',
			completed   : false,
		},
	]);
};
