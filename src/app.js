require('dotenv').config({
	path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

class AppController {
	constructor() {
		this.express = express();

		this.init();
	}

	init() {
		this.middlewares();
		this.enableCors();
		this.setBodyParser();
		this.routes();
	}

	middlewares() {
		this.express.use(express.json());
	}

	enableCors() {
		this.express.use(cors());
	}

	setBodyParser() {
		this.express.use(bodyParser.urlencoded({ extended: true }));
		if (process.env.NODE_ENV === 'DEV') {
			this.express.use('*', (req, res, next) => {
				const start = new Date().getTime();
				next();
				const end = new Date().getTime();
				const timer = end - start;
				console.log('Request start', `${start}ms`);
				console.log('Request end', `${end}ms`);
				console.log('Request Timer', `${timer}ms`);
			});
		}
	}

	routes() {
		this.express.use(require('./routes'));
	}
}

module.exports = new AppController().express;
