exports.up = async function (knex) {
	await knex.schema.createTable('posts', (table) => {
		table.increments('id');
		table.string('img');
		table.string('title');
		table.string('author');
		table.string('facebookPost');
		table.string('content');
		table.timestamp('createdAt');
	});
};

exports.down = async function (knex) {
	await knex.schema.dropTableIfExists('posts');
};
