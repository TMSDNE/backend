const { dropTable, fkey } = require('../helpers/db');

exports.up = function(knex, Promise) {
    return knex.schema.createTable('articles', table => {
        table.increments();
        table.string('text').notNullable();
        table.string('graph_url');
        table.string('date').notNullable();
        fkey(table, 'user_id', 'users');
      });
};

exports.down = dropTable('articles');