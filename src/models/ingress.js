const connection = require('../db/connection')

const savePerson = async (person) => {
  const db = await connection.getConnection();
  return await db('person')
    .insert(person)
    .onConflict(['hospcode', 'hn'])
    .merge();
}

module.exports = { savePerson }