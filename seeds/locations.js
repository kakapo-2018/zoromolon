exports.seed = function (knex, Promise) {
  return knex('location').del()
    .then(function () {
      return knex('location').insert([
        {suburb: 'Te Aro'},
        {suburb: 'Mt Victoria'},
        {suburb: 'Newtown'},
        {suburb: 'Oriental Bay'},
        {suburb: 'Lower/Upper Hutt'},
        {suburb: 'Other'},
      ])
    })
}
