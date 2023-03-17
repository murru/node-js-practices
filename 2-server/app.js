// Create constants to work with.
const http = require('http');
const routes = require('./routes');

// Create server.
const server = http.createServer(routes);

// Setup oprt to listen.
server.listen(3000);