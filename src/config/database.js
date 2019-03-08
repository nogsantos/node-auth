/**
 * This code is repeted to use on tests. When the tests runs, the app context is not present.
 */
require('dotenv').config({
	path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

module.exports = {
	host: process.env.DB_HOST,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	dialect: process.env.DB_DIALECT || 'postgres',
	storage: './__tests__/database.sqlite', // define path to sqlite tests db
	operatorsAliases: false, // disable sequelize warning
	logging: false, // show minus logs when migrations runs
	define: {
		timestamps: true, // force to create update and created at
		underscored: true, // force to create tables with underscore
		underscoredAll: true // force to create fields with underscore
	}
};
