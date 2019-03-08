const jwt = require('jsonwebtoken');
const { promisify } = require('util');

module.exports = async (req, res, next) => {
	const authHeader = req.headers.authorization;
	if (!authHeader) {
		return res.status(401).json({
			message: 'Token not provided'
		});
	}
	/**
	 * The header will be: Bearer token
	 * Whe must get only the token
	 */
	const [, token] = authHeader.split(' ');
	/**
	 * Jwt lib requires a try catch to return invalid
	 * He returns an arror if can`t decodify the token
	 */
	try {
		/**
		 * Use promisefy to transfor callback into promise
		 */
		const decode = await promisify(jwt.verify)(token, process.env.APP_SECRET);
		/**
		 * Set the user id for controllers.
		 */
		req.user_id = decode.id;
		return next();
	} catch (error) {
		return res.status(401).json({
			message: 'Token invalid'
		});
	}
};
