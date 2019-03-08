module.exports = {
	host: '127.0.0.1',
	username: 'postgres',
	password: '123456',
	database: 'node-auth-db',
	dialect: 'postgres',
	operatorsAliases: false, // disable sequelize warning
	logging: false, // show minus logs when migrations runs
	define: {
		timestamps: true, // force to create update and created at
		underscored: true, // force to create tables with underscore
		underscoredAll: true // force to create fields with underscore
	}
};
