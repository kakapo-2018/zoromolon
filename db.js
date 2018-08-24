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
  getLocations,
  getTeacherInstruments,
  getBookingRequest
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
  if (data.accountType == 'teacher'){
  return addDataToTeachers(data)
  }
  else if (data.accountType == 'student'){
  return addDataToStudents(data)
  }
}

function addDataToStudents(data, testConn){
  const conn = testConn || connection
  delete data.accountType
  return conn ('students')
  .insert(data, 'id')
  .then((thisID) => {
    return thisID
})
}

function addDataToTeachers(data, testConn){
  const conn = testConn || connection
  delete data.accountType
  return conn ('teachers')
  .insert(data, 'id')
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

function getTeacherInstruments(id, testConn) {
  const conn = testConn || connection
  return conn ('instruments')
  .join('teachers', 'instruments.id', '=', 'instrument_id')
  .where('instruments.id', '=', id)
  .select()
}

function getBookingRequest(id, testConn) {
  const conn = testConn || connection
  return conn ('teachers')
  .where('teachers.id', '=', 'id')
  .select()
  .first()
}