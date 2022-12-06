const connection = require('../db/connection')

const getPatientInfo = async (cid) => {
  const db = await connection.getConnection();
  return await db('patient').where("hn", cid)
}

const getPatient = async () => {
  const db = await connection.getConnection();
  return await db('patient').limit(10)
}

module.exports = { getPatientInfo, getPatient }