const { dropTable } = require('../helpers/db');

exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table
      .string('username')
      .notNullable()
      .unique();
    table.string('password').notNullable();
    table.boolean('deleted').default(false);
  });
};

exports.down = dropTable('users');
