exports.up = (knex, Promise) => {
  return knex.schema.createTable('instrumentsInStudent', (table) => {
    table.integer('student_id'),
    table.integer('instrument_id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('instrumentsInStudent')
}
