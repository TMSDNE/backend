const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

module.exports = server => {
  server.use(express.json());
  server.use(express.urlencoded({ extended: false }));
  server.use(morgan('dev'));
  server.use(helmet());
  server.use(cors());
};
