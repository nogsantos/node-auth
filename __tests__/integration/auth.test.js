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
			.post('/auth')
			.send({
				email: user.email,
				password: '123123'
			});

		expect(response.status).toBe(200);
	});

	it('should not authenticate with invalid credentials', async () => {
		const user = await factory.create('User');

		const response = await request(app)
			.post('/auth')
			.send({
				email: user.email,
				password: '123'
			});

		expect(response.body).toHaveProperty('message');
		expect(response.body.message).toBe('Incorrect credentials');
		expect(response.status).toBe(401);
	});

	it('should return jwt token when authenticated', async () => {
		const user = await factory.create('User', {
			password: '123456'
		});

		const response = await request(app)
			.post('/auth')
			.send({
				email: user.email,
				password: '123456'
			});

		expect(response.body).toHaveProperty('token');
	});

	it('should be able to access private routes when authenticated', async () => {
		const user = await factory.create('User');

		const response = await request(app)
			.get('/dashboard')
			.set('Authorization', `Bearer ${user.generateToken()}`);

		expect(response.status).toBe(200);
	});

	it('should not be able to access private routes without jwt token', async () => {
		const response = await request(app).get('/dashboard');
		expect(response.status).toBe(401);
	});

	it('should not be able to access private routes with an invalid token', async () => {
		const response = await request(app)
			.get('/dashboard')
			.set('Authorization', 'Bearer xxxxx');

		expect(response.body).toHaveProperty('message');
		expect(response.body.message).toBe('Token invalid');
		expect(response.status).toBe(401);
	});
});
