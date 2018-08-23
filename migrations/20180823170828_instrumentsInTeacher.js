exports.up = (knex, Promise) => {
  return knex.schema.createTable('instrumentsInTeacher', (table) => {
    table.integer('teacher_id'),
    table.integer('instrument_id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('instrumentsInTeacher')
}
