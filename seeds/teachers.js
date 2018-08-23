exports.seed = function (knex, Promise) {
  return knex('teachers').del()
    .then(function () {
      return knex('teachers').insert([
        {name: 'Ambitious Aardvark', email: 'aardvark@example.org', phone: '1234', instrument_id: 0, bio: 'hi my name is...', location: 'Te Aro' , image_url: '1.jpg'},
        {name: 'Bamboozled Baboon', email: 'baboon@example.org', phone: '1234', instrument_id: 0, bio: 'hi my name is...', location: 'Te Aro' , image_url: '1.jpg'},
        {name: 'Curious Capybara', email: 'capybara@example.org', phone: '1234', instrument_id: 0, bio: 'hi my name is...', location: 'Te Aro' , image_url: '1.jpg'},
        {name: 'Dilapidated Duck', email: 'duck@example.org', phone: '1234', instrument_id: 0, bio: 'hi my name is...', location: 'Te Aro' , image_url: '1.jpg'},
        {name: 'Exuberant Elephant', email: 'elephant@example.org', phone: '1234', instrument_id: 0, bio: 'hi my name is...', location: 'Te Aro' , image_url: '1.jpg'},
        {name: 'Fascinated Flying Fox', email: 'flying.fox@example.org', phone: '1234', instrument_id: 0, bio: 'hi my name is...', location: 'Te Aro' , image_url: '1.jpg'},
        {name: 'Generous Gila Monster', email: 'gila.monster@example.org', phone: '1234', instrument_id: 0, bio: 'hi my name is...', location: 'Te Aro' , image_url: '1.jpg'},
      ])
    })
}