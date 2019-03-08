const routes = require('express').Router();
const authMiddleware = require('./app/middleware/auth');

const AuthController = require('./app/controllers/AuthController');

/**
 * Public routes
 */
routes.post('/auth', AuthController.store);

/**
 * Private routes
 */
routes.use(authMiddleware);

routes.get('/dashboard', (req, res) => res.status(200).send());

module.exports = routes;
