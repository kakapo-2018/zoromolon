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
  return conn('teachers').where('id', 1).first()
}

function getInstruments(testConn) {
  const conn = testConn || connection
  return conn('instruments')
}

function getLocations(testConn) {
  const conn = testConn || connection
  return conn('location')
}