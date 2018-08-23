const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getTeacher,
  getTeachers,
  getStudent,
  getStudents,
  createUser,
  getInstruments,
  getLocations
}

function getTeachers (testConn) {
  const conn = testConn || connection
  return conn('teachers').select()
}

function getTeacher (id, testConn) {
  const conn = testConn || connection
  return conn('teachers').where('id', id).first()
}

function getStudents (testConn) {
  const conn = testConn || connection
  return conn('students').select()
}

function getStudent (id, testConn) {
  const conn = testConn || connection
  return conn('students').where('id', id).first()
}

function createUser(data, testConn){
  const conn = testConn || connection
  if (data.accountType == 1){
  return addDataToTeachers(data)
  }
  else if (data.accountType == 2){
  return addDataToStudents(data)
  }
}

function addDataToStudents(data, testConn){
  const conn = testConn || connection
  delete data.accountType
  return conn ('students')
  .insert(data)
  .then((thisID) => {
    return thisID
})
}

function addDataToTeachers(data, testConn){
  const conn = testConn || connection
  delete data.accountType
  return conn ('teachers')
  .insert(data)
  .then((thisID) => {
    return thisID
})
}

function getInstruments(testConn) {
  const conn = testConn || connection
  return conn('instruments')
}

function getLocations(testConn) {
  const conn = testConn || connection
  return conn('location')
}