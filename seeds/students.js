exports.seed = function (knex, Promise) {
  return knex('students').del()
    .then(function () {
      return knex('students').insert([
        {name: 'Sandy Beaches', email: 'sandy@example.org', phone: '021894981', instrument_id: 1, bio: 'hi my name is Sandy, I like to go to the beach', location_id: 1, image_url: '1.jpg'},
        {name: 'Json Statham', email: 'json@example.org', phone: '022198189', instrument_id: 2, bio: 'hi my name is Json', location_id: 3, image_url: '1.jpg'},
        {name: 'Sylvester Schwarzenegger', email: 'sylvester@example.org', phone: '021289498', instrument_id: 1, bio: 'hi my name is Sylvester', location_id: 4, image_url: '1.jpg'},
        {name: 'Bob Smith', email: 'bobs@example.org', phone: '045929', instrument_id: 3, bio: 'hi my name is Bob', location_id: 2, image_url: '1.jpg'},
        {name: 'Bob Dylan', email: 'bobd@example.org', phone: '04981894189', instrument_id: 1, bio: 'hi my name is Bob', location_id: 1, image_url: '1.jpg'},
        {name: 'Eddie Vedder', email: 'flylikeavedder@example.org', phone: '0428945', instrument_id: 3, bio: 'hi my name is Eddie', location_id: 3, image_url: '1.jpg'},
        {name: 'Madonna', email: 'madonna@example.org', phone: '015198118', instrument_id: 4, bio: 'hi my name is Madonna', location_id: 2, image_url: '1.jpg'},
      ])
    })
}