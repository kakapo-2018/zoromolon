exports.seed = function (knex, Promise) {
  return knex('instrumentsInTeacher').del()
    .then(function () {
      return knex('instrumentsInTeacher').insert([
        {teacher_id: 1, instrument_id: 1},
        {teacher_id: 2, instrument_id: 2},
        {teacher_id: 3, instrument_id: 3},
        {teacher_id: 4, instrument_id: 4},
        {teacher_id: 6, instrument_id: 2},
        {teacher_id: 1, instrument_id: 5}
      ])
    })
}
