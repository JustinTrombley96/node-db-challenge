exports.seed = function(knex) {
	return knex('resources').insert([
		{
			resource_name : 'The Kronorium',
			description   : 'It holds all of your information.',
		},
		{
			resource_name : 'The White Box',
			description   : 'You will replay past events in real time.',
		},
		{
			resource_name : 'The Dark Aether',
			description   : 'IT IS',
		},
	]);
};
