const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/teachers', (req, res) => {
  db.getTeachers()
    .then(teachers => {
      console.log(teachers);
      res.render('teachers', {teachers : teachers})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/students', (req, res) => {
  db.getStudents()
    .then(students => {
      console.log(students);
      res.render('students', {students: students})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})


router.get('/profile/student/:id', (req, res) => {
  let id = req.params.id;
  db.getStudent(id)
    .then(profile => {
      console.log(profile);
      res.render('profile', {profile: profile})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/profile/teacher/:id', (req, res) => {
  let id = req.params.id;
  db.getTeacher(id)
    .then(profile => {
      console.log(profile);
      res.render('profile', {profile: profile})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/new', (req, res) => {
  db.getInstruments()
    .then(instrumentData => {
      console.log(instrumentData)
      res.render('sign-up', {instrumentData: instrumentData})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/new', (req, res) => {
  console.log(req.body)

  db.createUser(req.body).then(newUserData => {
    res.render('sign-up')
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })

})

module.exports = router
