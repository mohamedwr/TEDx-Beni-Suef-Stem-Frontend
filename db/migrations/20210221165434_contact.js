exports.up = async function (knex) {
	await knex.schema.createTable('contact', (table) => {
		table.string('name');
		table.string('email');
		table.string('subject');
		table.string('message');
		table.timestamp('created_at').defaultTo(knex.fn.now());
	});
};

exports.down = async function (knex) {
	await knex.schema.dropTableIfExists('contact');
};
