module.exports = {
  dropTable: name => knex => knex.schema.dropTableIfExists(name),
  fkey: (table, name, ref) => {
    table
      .integer(name)
      .unsigned()
      .notNullable();
    table
      .foreign(name)
      .references('id')
      .on(ref)
      .onDelete('CASCADE');
  }
};
