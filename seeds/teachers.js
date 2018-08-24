exports.seed = function (knex, Promise) {
  return knex('teachers').del()
    .then(function () {
      return knex('teachers').insert([
        {name: 'Ambitious Aardvark', email: 'aardvark@example.org', phone: '1234', instrument_id: 7, bio: 'I am an aaedvark, I am good at guitar', location_id: 1 , image_url: '1.jpg'},
        {name: 'Bamboozled Baboon', email: 'baboon@example.org', phone: '1234', instrument_id: 6, bio: 'hi my name is baboon, I like violin', location_id: 2 , image_url: '1.jpg'},
        {name: 'Curious Capybara', email: 'capybara@example.org', phone: '1234', instrument_id: 5, bio: 'Hello', location_id: 3 , image_url: '1.jpg'},
        {name: 'Dilapidated Duck', email: 'duck@example.org', phone: '1234', instrument_id: 1, bio: 'I am a duck', location_id: 4 , image_url: '1.jpg'},
        {name: 'Exuberant Elephant', email: 'elephant@example.org', phone: '1234', instrument_id: 1, bio: 'I am an elephant - I sing good', location_id: 5 , image_url: '1.jpg'},
        {name: 'Fascinated Flying Fox', email: 'flying.fox@example.org', phone: '1234', instrument_id: 1, bio: 'Flying fox - good teacher', location_id: 1 , image_url: '1.jpg'},
        {name: 'Generous Gila Monster', email: 'gila.monster@example.org', phone: '1234', instrument_id: 2, bio: 'Generous monster - great teacher', location_id: 3 , image_url: '1.jpg'},
      ])
    })
}