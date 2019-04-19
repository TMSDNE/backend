// all the libraries
const express = require('express');
const initServerMiddleware = require('./middleware/serverMiddleware');
const rootRoute = require('./controllers/rootController');
const router = require('./routes');
const server = express();

// middleware
initServerMiddleware(server);

// router
server.use('/api', router);
server.get('/', rootRoute);

module.exports = server;
