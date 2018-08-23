exports.seed = function (knex, Promise) {
  return knex('instruments').del()
    .then(function () {
      return knex('instruments').insert([
        {name: 'guitar'},
        {name: 'drums'},
        {name: 'violin'},
        {name: 'cello'},
        {name: 'ukelele'},
        {name: 'flute'},
      ])
    })
}
