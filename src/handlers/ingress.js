const { DateTime } = require('luxon');

const grpc = require('@grpc/grpc-js')
const models = require('../models/ingress')

const setErrorResponse = (code, message) => {
  const err = new Error(message)
  err.code = code
  throw err
}

const savePerson = async (ctx) => {
  try {
    const person = ctx.req.person

    const data = person.map(v => {
      const birth = DateTime.fromFormat(v.birth, "yyyyMMdd")
      const d_updated = DateTime.fromFormat(v.dUpdate, "yyyyMMddHHmmss")

      v.birth = birth.toFormat('yyyy-MM-dd')
      v.d_update = d_updated.toFormat('yyyy-MM-dd HH:mm:ss')
      // remove unused field
      delete v.dUpdate

      return v
    })

    await models.savePerson(data)
    ctx.res = {}
  } catch (error) {
    console.error(error)
    const code = grpc.status.INTERNAL
    const message = "INTERNAL ERROR"
    setErrorResponse(code, message)
  }
}

module.exports = { savePerson }