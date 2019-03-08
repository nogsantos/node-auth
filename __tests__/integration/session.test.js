const request = require('supertest');
const app = require('../../src/app');
const { User } = require('../../src/app/models');
const truncate = require('../utils/truncte');

describe('Authentication', () => {
	beforeEach(async () => {
		await truncate();
	});

	it('should authenticate with valid credentials', async () => {
		const user = await User.create({
			name: 'Fabricio Nogueira',
			email: 'nogsantos@gmail.com',
			password: '123456'
		});

		const response = await request(app)
			.post('/sessions')
			.send({
				email: user.email,
				password: '123456'
			});

		expect(response.status).toBe(200);
	});

	it('should not authenticate with invalid credentials', async () => {
		const user = await User.create({
			name: 'Fabricio Nogueira',
			email: 'nogsantos@gmail.com',
			password: '123456'
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
		const user = await User.create({
			name: 'Fabricio Nogueira',
			email: 'nogsantos@gmail.com',
			password: '123456'
		});

		const response = await request(app)
			.post('/sessions')
			.send({
				email: user.email,
				password: '123456'
			});

		expect(response.body).toHaveProperty('token');
	});
});
