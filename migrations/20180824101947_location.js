exports.up = (knex, Promise) => {
  return knex.schema.createTable('location', (table) => {
    table.increments('id').primary(),
    table.string('suburb')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('location')
}
