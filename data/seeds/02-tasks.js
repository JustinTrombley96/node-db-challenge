exports.seed = function(knex) {
	return knex('tasks').insert([
		{
			project_id  : '1',
			description : 'boop',
			notes       : 'Make sure you get the right boop',
			completed   : false,
		},
		{
			project_id  : '2',
			description : 'Mango',
			notes       : 'Make sure to shake it',
			completed   : false,
		},
		{
			project_id  : '3',
			description : 'Cockroaches',
			notes       : 'They survived the nukes',
			completed   : false,
		},
	]);
};
