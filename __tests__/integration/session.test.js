const { User } = require('../../src/app/models');

describe('Authentication', () => {
	it('should create an user', async () => {
		const user = await User.create({
			name: 'Fabricio Nogueira',
			email: 'nogsantos@gmail.com',
			password_hash: '123456'
		});

		console.log('user', user);

		expect(user.email).toBe('nogsantos@gmail.com');
	});
});
