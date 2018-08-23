exports.seed = function (knex, Promise) {
  return knex('students').del()
    .then(function () {
      return knex('students').insert([
        {name: '0Ambitious Aardvark', email: 'aardvark@example.org', phone: '1234', instrument_id: 0, bio: 'hi my name is...', location_id: 1, image_url: '1.jpg'},
        {name: '0Bamboozled Baboon', email: 'baboon@example.org', phone: '1234', instrument_id: 0, bio: 'hi my name is...', location_id: 3, image_url: '1.jpg'},
        {name: '0Curious Capybara', email: 'capybara@example.org', phone: '1234', instrument_id: 0, bio: 'hi my name is...', location_id: 4, image_url: '1.jpg'},
        {name: '0Dilapidated Duck', email: 'duck@example.org', phone: '1234', instrument_id: 0, bio: 'hi my name is...', location_id: 2, image_url: '1.jpg'},
        {name: '0Exuberant Elephant', email: 'elephant@example.org', phone: '1234', instrument_id: 0, bio: 'hi my name is...', location_id: 1, image_url: '1.jpg'},
        {name: '0Fascinated Flying Fox', email: 'flying.fox@example.org', phone: '1234', instrument_id: 0, bio: 'hi my name is...', location_id: 3, image_url: '1.jpg'},
        {name: '0Generous Gila Monster', email: 'gila.monster@example.org', phone: '1234', instrument_id: 0, bio: 'hi my name is...', location_id: 2, image_url: '1.jpg'},
      ])
    })
}