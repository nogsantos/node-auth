const app = require('./app');
const log = require('debug')('node-auth:server');
const port = process.env.PORT || 3000;

app.listen(port, () => {
	log('Server initialiazed on port', port);
});
