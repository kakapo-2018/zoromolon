exports.up = (knex, Promise) => {
    return knex.schema.createTable('requests', (table) => {
      table.integer('teacher_id'),
      table.integer('student_id')
      table.string('request')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('requests')
  }
  