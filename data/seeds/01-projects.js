exports.seed = function(knex) {
	return knex('projects').insert([
		{
			project_name : 'Find the Gateway',
			description  : 'The Gateway must be open',
			completed    : false,
		},
		{
			project_name : 'Find A Vessel for Maxis',
			description  : 'The brain must be extracted',
			completed    : false,
		},
		{
			project_name : 'Collect the Original Staffs',
			description  : 'Remake each of the four original staffs',
			completed    : false,
		},
	]);
};
