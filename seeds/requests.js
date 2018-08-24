exports.seed = function (knex, Promise) {
    return knex('requests').del()
      .then(function () {
        return knex('requests').insert([
          {teacher_id: 1, student_id: 1, request: 'hi teach me guitar'},
          {teacher_id: 1, student_id: 2, request: 'i want to learn the drums'},
          {teacher_id: 2, student_id: 3, request: 'Can you teach me'},
          {teacher_id: 3, student_id: 4, request: ' my number is ...'},
          {teacher_id: 4, student_id: 1, request: 'teach me the piano'},
          {teacher_id: 5, student_id: 5, request: 'do you also teach on fridays'}
        ])
      })
  }
  