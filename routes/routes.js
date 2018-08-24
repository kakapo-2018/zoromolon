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
  db.getInstruments()
    .then(instrumentData => { 
      db.getStudents()
      .then(students => {
        console.log(students);
        res.render('students', {instrumentData: instrumentData, students: students})
      })

    })

    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})


router.get('/profile/student/:id', (req, res) => {
  let id = req.params.id;
  db.getStudent(id)
    .then(profile => {
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
      let profilID = Number({profile : profile})
      // console.log(profile[0].id)
      res.render('profile', profilID)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/new', (req, res) => {
  db.getInstruments()
    .then(instrumentData => {
      db.getLocations()
      .then( locationData => {
        res.render('sign-up', {instrumentData: instrumentData, locationData: locationData})
      })
      
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/new', (req, res) => {
  let typeOfProfile = req.body.accountType

  db.createUser(req.body).then(newUserID => {
    res.redirect('profile/'+typeOfProfile+'/'+newUserID)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/teacherlist', (req, res) => {
  console.log("instrument ID", req.body.instrument_id)
  db.getTeacherInstruments(req.body.instrument_id)
  .then(listOfTeachers => {
    console.log("id", listOfTeachers)
    res.render('teacherlist', {listOfTeachers : listOfTeachers})
        })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})






module.exports = router
