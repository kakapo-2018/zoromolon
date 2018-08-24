exports.seed = function (knex, Promise) {
  return knex('instruments').del()
    .then(function () {
      return knex('instruments').insert([
        {name: 'Guitar'},
        {name: 'Drums'},
        {name: 'Violin'},
        {name: 'Cello'},
        {name: 'Ukelele'},
        {name: 'Flute'},
        {name: 'Piano'},
        {name: 'Flute'},
        {name: 'Trianle'},
        {name: 'Saxophone'},
        {name: 'Sing'},
        {name: 'Other'},
      ])
    })
}
