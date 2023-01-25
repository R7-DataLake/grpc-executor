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
    const data = ctx.req.data

    const items = data.map(v => {
      const birth = DateTime.fromFormat(v.birth, "yyyyMMdd")
      const d_updated = DateTime.fromFormat(v.dUpdate, "yyyyMMddHHmmss")

      v.birth = birth.toFormat('yyyy-MM-dd')
      v.d_update = d_updated.toFormat('yyyy-MM-dd HH:mm:ss')
      // remove unused field
      delete v.dUpdate

      return v
    })

    await models.savePerson(items)
    ctx.res = {}
  } catch (error) {
    console.error(error)
    const code = grpc.status.INTERNAL
    const message = "INTERNAL ERROR"
    setErrorResponse(code, message)
  }
}

const saveChronic = async (ctx) => {
  try {
    const data = ctx.req.data

    const items = data.map(v => {
      const date_diag = DateTime.fromFormat(v.dateDiag, "yyyyMMdd")
      const date_disch = DateTime.fromFormat(v.dateDisch, "yyyyMMdd")
      const d_updated = DateTime.fromFormat(v.dUpdate, "yyyyMMddHHmmss")

      v.date_diag = date_diag.toFormat('yyyy-MM-dd')
      v.date_disch = date_disch.toFormat('yyyy-MM-dd')
      v.d_update = d_updated.toFormat('yyyy-MM-dd HH:mm:ss')
      // remove unused field
      delete v.dateDiag
      delete v.dateDisch
      delete v.dUpdate

      return v
    })

    await models.saveChronic(items)
    ctx.res = {}
  } catch (error) {
    console.error(error)
    const code = grpc.status.INTERNAL
    const message = "INTERNAL ERROR"
    setErrorResponse(code, message)
  }
}

const saveOpd = async (ctx) => {
  try {
    const data = ctx.req.data

    const items = data.map(v => {
      const date_serv = DateTime.fromFormat(v.dateServ, "yyyyMMdd")
      const time_serv = DateTime.fromFormat(v.timeServ, "HHmmss")
      const d_updated = DateTime.fromFormat(v.dUpdate, "yyyyMMddHHmmss")

      v.date_serv = date_serv.toFormat('yyyy-MM-dd')
      v.time_serv = time_serv.toFormat('HH:mm:ss')
      v.d_update = d_updated.toFormat('yyyy-MM-dd HH:mm:ss')
      v.ins_type = v.insType
      v.ins_number = v.insNumber
      v.ins_hospmain = v.insHospmain
      v.ins_hospsub = v.insHospsub
      v.diag_text = v.diagText
      // remove unused field
      delete v.dUpdate
      delete v.dateServ
      delete v.insType
      delete v.insNumber
      delete v.insHospmain
      delete v.insHospsub
      delete v.diagText

      return v
    })

    await models.saveOpd(items)
    ctx.res = {}
  } catch (error) {
    console.error(error)
    const code = grpc.status.INTERNAL
    const message = "INTERNAL ERROR"
    setErrorResponse(code, message)
  }
}

const saveOpdx = async (ctx) => {
  try {
    const data = ctx.req.data

    const items = data.map(v => {
      const datedx = DateTime.fromFormat(v.datedx, "yyyyMMdd")
      const d_updated = DateTime.fromFormat(v.dUpdate, "yyyyMMddHHmmss")

      v.datedx = datedx.toFormat('yyyy-MM-dd')
      v.d_update = d_updated.toFormat('yyyy-MM-dd HH:mm:ss')
      // remove unused field
      delete v.dUpdate

      return v
    })

    await models.saveOpdx(items)
    ctx.res = {}
  } catch (error) {
    console.error(error)
    const code = grpc.status.INTERNAL
    const message = "INTERNAL ERROR"
    setErrorResponse(code, message)
  }
}

const saveOpop = async (ctx) => {
  try {
    const data = ctx.req.data

    const items = data.map(v => {
      const dateop = DateTime.fromFormat(v.dateop, "yyyyMMdd")
      const d_updated = DateTime.fromFormat(v.dUpdate, "yyyyMMddHHmmss")

      v.dateop = dateop.toFormat('yyyy-MM-dd')
      v.d_update = d_updated.toFormat('yyyy-MM-dd HH:mm:ss')
      // remove unused field
      delete v.dUpdate

      return v
    })

    await models.saveOpop(items)
    ctx.res = {}
  } catch (error) {
    console.error(error)
    const code = grpc.status.INTERNAL
    const message = "INTERNAL ERROR"
    setErrorResponse(code, message)
  }
}

const saveIpd = async (ctx) => {
  try {
    const data = ctx.req.data

    const items = data.map(v => {
      const dateadm = DateTime.fromFormat(v.dateadm, "yyyyMMdd")
      const timeadm = DateTime.fromFormat(v.timeadm, "HHmm")
      const datedsc = DateTime.fromFormat(v.datedsc, "yyyyMMdd")
      const timedsc = DateTime.fromFormat(v.timedsc, "HHmm")
      const d_updated = DateTime.fromFormat(v.dUpdate, "yyyyMMddHHmmss")

      v.dateadm = dateadm.toFormat('yyyy-MM-dd')
      v.datedsc = datedsc.toFormat('yyyy-MM-dd')
      v.timeadm = timeadm.toFormat('HH:mm')
      v.timedsc = timedsc.toFormat('HH:mm')
      v.adm_w = v.admW
      v.d_update = d_updated.toFormat('yyyy-MM-dd HH:mm:ss')
      // remove unused field
      delete v.dUpdate
      delete v.admW

      return v
    })

    await models.saveIpd(items)
    ctx.res = {}
  } catch (error) {
    console.error(error)
    const code = grpc.status.INTERNAL
    const message = "INTERNAL ERROR"
    setErrorResponse(code, message)
  }
}

const saveIpdx = async (ctx) => {
  try {
    const data = ctx.req.data

    const items = data.map(v => {
      const d_updated = DateTime.fromFormat(v.dUpdate, "yyyyMMddHHmmss")
      v.d_update = d_updated.toFormat('yyyy-MM-dd HH:mm:ss')
      // remove unused field
      delete v.dUpdate

      return v
    })

    await models.saveIpdx(items)
    ctx.res = {}
  } catch (error) {
    console.error(error)
    const code = grpc.status.INTERNAL
    const message = "INTERNAL ERROR"
    setErrorResponse(code, message)
  }
}

const saveIpop = async (ctx) => {
  try {
    const data = ctx.req.data

    const items = data.map(v => {
      const datein = DateTime.fromFormat(v.datein, "yyyyMMdd")
      const timein = DateTime.fromFormat(v.timein, "HHmmss")
      const dateout = DateTime.fromFormat(v.dateout, "yyyyMMdd")
      const timeout = DateTime.fromFormat(v.timeout, "HHmmss")
      const d_updated = DateTime.fromFormat(v.dUpdate, "yyyyMMddHHmmss")

      v.datein = datein.toFormat('yyyy-MM-dd')
      v.dateout = dateout.toFormat('yyyy-MM-dd')
      v.timein = timein.toFormat('HH:mm:ss')
      v.timeout = timeout.toFormat('HH:mm:ss')
      v.d_update = d_updated.toFormat('yyyy-MM-dd HH:mm:ss')
      // remove unused field
      delete v.dUpdate

      return v
    })

    await models.saveIpop(items)
    ctx.res = {}
  } catch (error) {
    console.error(error)
    const code = grpc.status.INTERNAL
    const message = "INTERNAL ERROR"
    setErrorResponse(code, message)
  }
}

const saveDrug = async (ctx) => {
  try {
    const data = ctx.req.data

    const items = data.map(v => {
      const d_updated = DateTime.fromFormat(v.dUpdate, "yyyyMMddHHmmss")
      v.d_update = d_updated.toFormat('yyyy-MM-dd HH:mm:ss')

      v.unit_pack = v.unitPack
      // remove unused field
      delete v.dUpdate
      delete v.unitPack

      return v
    })

    await models.saveDrug(items)
    ctx.res = {}
  } catch (error) {
    console.error(error)
    const code = grpc.status.INTERNAL
    const message = "INTERNAL ERROR"
    setErrorResponse(code, message)
  }
}

const saveLab = async (ctx) => {
  try {
    const data = ctx.req.data

    const items = data.map(v => {
      const d_updated = DateTime.fromFormat(v.dUpdate, "yyyyMMddHHmmss")
      v.d_update = d_updated.toFormat('yyyy-MM-dd HH:mm:ss')
      // remove unused field
      delete v.dUpdate

      return v
    })

    await models.saveLab(items)
    ctx.res = {}
  } catch (error) {
    console.error(error)
    const code = grpc.status.INTERNAL
    const message = "INTERNAL ERROR"
    setErrorResponse(code, message)
  }
}

const saveAppoint = async (ctx) => {
  try {
    const data = ctx.req.data

    const items = data.map(v => {
      const appoint_date = DateTime.fromFormat(v.appointDate, "yyyyMMdd")
      const appoint_time = DateTime.fromFormat(v.appointTime, "HHmmss")
      const d_updated = DateTime.fromFormat(v.dUpdate, "yyyyMMddHHmmss")
      v.appoint_date = appoint_date.toFormat('yyyy-MM-dd')
      v.appoint_time = appoint_time.toFormat('HH:mm:ss')
      v.d_update = d_updated.toFormat('yyyy-MM-dd HH:mm:ss')

      // remove unused field
      delete v.appointDate
      delete v.appointTime
      delete v.dUpdate

      return v
    })

    await models.saveAppoint(items)
    ctx.res = {}
  } catch (error) {
    console.error(error)
    const code = grpc.status.INTERNAL
    const message = "INTERNAL ERROR"
    setErrorResponse(code, message)
  }
}

const saveDrugallergy = async (ctx) => {
  try {
    const data = ctx.req.data

    const items = data.map(v => {
      const daterecord = DateTime.fromFormat(v.daterecord, "yyyyMMdd")
      const d_updated = DateTime.fromFormat(v.dUpdate, "yyyyMMddHHmmss")
      v.daterecord = daterecord.toFormat('yyyy-MM-dd')
      v.d_update = d_updated.toFormat('yyyy-MM-dd HH:mm:ss')

      // remove unused field
      delete v.dUpdate

      return v
    })

    await models.saveDrugallergy(items)
    ctx.res = {}
  } catch (error) {
    console.error(error)
    const code = grpc.status.INTERNAL
    const message = "INTERNAL ERROR"
    setErrorResponse(code, message)
  }
}

module.exports = {
  savePerson, saveChronic,
  saveOpd, saveOpdx,
  saveOpop, saveIpd,
  saveIpop, saveDrug,
  saveLab, saveAppoint,
  saveDrugallergy, saveIpdx
}