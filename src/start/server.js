const app = require('./app');

const server = app.listen(5000, () => console.log('Server started on port 5000...'));

module.exports = server;
