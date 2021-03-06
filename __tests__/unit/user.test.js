const bcrypt = require('bcryptjs');
const { User } = require('@models');
const truncate = require('@testUtils/truncte');

describe('User', () => {
	beforeEach(async () => {
		await truncate();
	});

	it('should encrypt user password', async () => {
		const user = await User.create({
			name: 'Fabricio Nogueira',
			email: 'nogsantos@gmail.com',
			password: '123456'
		});

		const compareHash = await bcrypt.compare('123456', user.password_hash);

		expect(compareHash).toBe(true);
	});
});
