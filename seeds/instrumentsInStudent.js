exports.seed = function (knex, Promise) {
  return knex('instrumentsInStudent').del()
    .then(function () {
      return knex('instrumentsInStudent').insert([
        {student_id: 1, instrument_id: 1},
        {student_id: 2, instrument_id: 2},
        {student_id: 3, instrument_id: 3},
        {student_id: 4, instrument_id: 4},
        {student_id: 1, instrument_id: 2},
        {student_id: 5, instrument_id: 5}
      ])
    })
}
