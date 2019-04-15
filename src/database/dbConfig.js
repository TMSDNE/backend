const knex = require('knex');
const knexConfig = require('../../knexfile');

require('dotenv').config();

const APP_ENV = process.env.APP_ENV || 'development';

module.exports = knex(knexConfig[APP_ENV]);
