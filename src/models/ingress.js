const connection = require('../db/connection')

const savePerson = async (data) => {
  const db = await connection.getConnection();
  return await db('person')
    .insert(data)
    .onConflict(['hospcode', 'hn'])
    .merge();
}

const saveOpd = async (data) => {
  const db = await connection.getConnection();
  return await db('opd')
    .insert(data)
    .onConflict(['hospcode', 'hn', 'date_serv', 'seq'])
    .merge();
}

const saveChronic = async (data) => {
  const db = await connection.getConnection();
  return await db('chronic')
    .insert(data)
    .onConflict(['hospcode', 'hn', 'chronic'])
    .merge();
}

const saveOpdx = async (data) => {
  const db = await connection.getConnection();
  return await db('opdx')
    .insert(data)
    .onConflict(['hospcode', 'hn', 'seq', 'diag'])
    .merge();
}

const saveOpop = async (data) => {
  const db = await connection.getConnection();
  return await db('opop')
    .insert(data)
    .onConflict(['hospcode', 'hn', 'seq', 'oper'])
    .merge();
}

const saveIpd = async (data) => {
  const db = await connection.getConnection();
  return await db('ipd')
    .insert(data)
    .onConflict(['hospcode', 'hn', 'an'])
    .merge();
}

const saveIpdx = async (data) => {
  const db = await connection.getConnection();
  return await db('ipdx')
    .insert(data)
    .onConflict(['hospcode', 'hn', 'an', 'diag'])
    .merge();
}

const saveIpop = async (data) => {
  const db = await connection.getConnection();
  return await db('ipop')
    .insert(data)
    .onConflict(['hospcode', 'hn', 'an', 'oper'])
    .merge();
}

const saveDrug = async (data) => {
  const db = await connection.getConnection();
  return await db('drug')
    .insert(data)
    .onConflict(['hospcode', 'hn', 'an', 'did'])
    .merge();
}

const saveLab = async (data) => {
  const db = await connection.getConnection();
  return await db('lab')
    .insert(data)
    .onConflict(['hospcode', 'hn', 'seq', 'labtest'])
    .merge();
}

const saveAppoint = async (data) => {
  const db = await connection.getConnection();
  return await db('appoint')
    .insert(data)
    .onConflict(['hospcode', 'hn', 'appoint_date', 'clinic'])
    .merge();
}

const saveDrugallergy = async (data) => {
  const db = await connection.getConnection();
  return await db('drugallergy')
    .insert(data)
    .onConflict(['hospcode', 'hn', 'dname'])
    .merge();
}

module.exports = {
  savePerson, saveOpd,
  saveChronic, saveOpdx,
  saveOpop, saveIpd,
  saveIpdx, saveIpop,
  saveDrug, saveLab,
  saveAppoint, saveDrugallergy
}