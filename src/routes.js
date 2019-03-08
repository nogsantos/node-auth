const routes = require('express').Router();
const authMiddleware = require('./app/middleware/auth');

const SessionController = require('./app/controllers/SessionController');

/**
 * Public routes
 */
routes.post('/sessions', SessionController.store);

/**
 * Private routes
 */
routes.use(authMiddleware);

routes.get('/dashboard', (req, res) => res.status(200).send());

module.exports = routes;
