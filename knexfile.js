// Update with your config settings.

module.exports = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: './db/data.sqlite3',
		},
		migrations: {
			directory: './db/migrations',
		},
		seeds: {
			directory: './db/seeds',
		},
		useNullAsDefault: true,
	},
	production: {
		client: 'pg',
		connection: process.env.DATABASE_URL,
		migrations: {
			directory: './db/migrations',
		},
		seeds: {
			directory: './db/seeds/production',
		},
		useNullAsDefault: true,
	},
};
