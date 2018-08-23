const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/teachers', (req, res) => {
  db.getTeachers()
    .then(teachers => {
      res.render('teachers', {teachers : teachers})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/students', (req, res) => {
  db.getStudents()
    .then(students => {
      res.render('students', {students: students})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})


router.get('/profile/student/:id', (req, res) => {
  let id = req.params.id;
  db.getStudent(id)
    .then(students => {
      res.render('profile', {students: students})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/profile/teacher/:id', (req, res) => {
  let id = req.params.id;
  db.getTeacher(id)
    .then(teachers => {
      res.render('profile', {teachers: teachers})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// router.get('/new', (req, res) => {
//   db.getUsers()
//     .then(users => {
//       res.render('index', {users: users})
//     })
//     .catch(err => {
//       res.status(500).send('DATABASE ERROR: ' + err.message)
//     })
// })

module.exports = router
