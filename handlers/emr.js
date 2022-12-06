const _ = require('lodash')
const grpc = require('@grpc/grpc-js')
const models = require('../models/emr')

const setErrorResponse = (code, message) => {
  const err = new Error(message)
  err.code = code
  throw err
}

const getPatient = async (ctx) => {
  const rs = await models.getPatient()
  ctx.res = { results: rs }
}

const getPatientInfo = async (ctx) => {
  const cid = ctx.req.cid;
  const rs = await models.getPatientInfo(cid)

  if (!_.isEmpty(rs)) {
    ctx.res = rs[0]
  } else {
    const code = grpc.status.NOT_FOUND
    const message = "NOT FOUND"
    setErrorResponse(code, message)
  }

}

module.exports = { getPatient, getPatientInfo }