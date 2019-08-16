exports.seed = function(knex) {
	return knex('tasks').insert([
		{
			description : 'boop',
			notes       : 'Make sure you get the right boop',
			completed   : false,
		},
		{
			description : 'Mango',
			notes       : 'Make sure to shake it',
			completed   : false,
		},
		{
			description : 'Cockroaches',
			notes       : 'They survived the nukes',
			completed   : false,
		},
	]);
};
