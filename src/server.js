require('module-alias/register');
const app = require('./app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log('Server initialiazed on port', port);
});
