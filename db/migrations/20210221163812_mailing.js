exports.up = async function (knex) {
	await knex.schema.createTable('mailing', (table) => {
		table.string('email');
		table.timestamp('created_at').defaultTo(knex.fn.now());
	});
};

exports.down = async function (knex) {
	await knex.schema.dropTableIfExists('mailing');
};
