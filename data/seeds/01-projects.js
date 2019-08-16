exports.seed = function(knex) {
	return knex('projects').insert([
		{
			project_name        : 'Find the Gateway',
			project_description : 'The Gateway must be open',
			completed           : 0,
		},
		{
			project_name        : 'Find A Vessel for Maxis',
			project_description : 'The brain must be extracted',
			completed           : 0,
		},
		{
			project_name        : 'Collect the Original Staffs',
			project_description : 'Remake each of the four original staffs',
			completed           : 0,
		},
	]);
};
