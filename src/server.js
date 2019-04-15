// all the libraries
const express = require('express');
const initServerMiddleware = require('./middleware/serverMiddleware');
const router = require('./routes');
const server = express();

// middleware
initServerMiddleware(server);

// router
server.use('/api', routes);

module.exports = server;
