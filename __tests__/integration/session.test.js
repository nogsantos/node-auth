const request = require('supertest');
const app = require('../../src/app');
const truncate = require('../utils/truncte');
const factory = require('../factories');

describe('Authentication', () => {
	beforeEach(async () => {
		await truncate();
	});

	it('should authenticate with valid credentials', async () => {
		const user = await factory.create('User', {
			password: '123123'
		});

		const response = await request(app)
			.post('/sessions')
			.send({
				email: user.email,
				password: '123123'
			});

		expect(response.status).toBe(200);
	});

	it('should not authenticate with invalid credentials', async () => {
		const user = await factory.create('User', {
			password: '123123'
		});

		const response = await request(app)
			.post('/sessions')
			.send({
				email: user.email,
				password: '123'
			});

		expect(response.body).toHaveProperty('message');
		expect(response.body.message).toBe('Incorrect credentials');
		expect(response.status).toBe(401);
	});

	it('should return jwt token when authenticated', async () => {
		const user = await factory.create('User');

		const response = await request(app)
			.post('/sessions')
			.send({
				email: user.email,
				password: '123456'
			});

		expect(response.body).toHaveProperty('token');
	});
});
