exports.up = (knex, Promise) => {
  return knex.schema.createTable('students', (table) => {
    table.increments('id').primary(),
    table.string('name'),
    table.string('email'),
    table.string('phone'),
    table.integer('instrument_id'),
    table.string('bio'),
    table.string('image_url')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('students')
}
