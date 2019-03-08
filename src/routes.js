const routes = require('express').Router();
const { User } = require('./app/models');

User.create({
	name: 'Fabricio Nogueira',
	email: 'nogsantos@gmail.com',
	password_hash: '12345'
});

module.exports = routes;
