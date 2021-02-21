exports.seed = function (knex) {
	return knex('mailing')
		.truncate()
		.then(function () {
			// Inserts seed entries
			return knex('mailing').insert([
				{ email: 'dodoge1@example.com' },
				{ email: 'dodoge2@example.com' },
				{ email: 'dodoge3@example.com' },
			]);
		});
};
