const express = require('express');
const initServerMiddleware = require('./middleware/serverMiddleware');

const server = express();

// all the libraries
initServerMiddleware(server);
// middleware

// router

module.exports = server;
