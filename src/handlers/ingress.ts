import { IngressModel } from "../models/ingress"

const { DateTime } = require('luxon')
const grpc = require('@grpc/grpc-js')
const ingressModel = new IngressModel()

export class IngressHandler {

  async savePerson(ctx: any) {
    try {

      const data = ctx.req.data
      const items = data.map((v: any) => {
        const birth = DateTime.fromFormat(v.birth, "yyyyMMdd")
        const d_updated = DateTime.fromFormat(v.dUpdate, "yyyyMMddHHmmss")

        v.birth = birth.toFormat('yyyy-MM-dd')
        v.d_update = d_updated.toFormat('yyyy-MM-dd HH:mm:ss')
        // remove unused field
        delete v.dUpdate
        return v
      })

      await ingressModel.savePerson(items)
      ctx.res = { ok: true }
    } catch (error) {
      console.error(error)
      const code = grpc.status.INTERNAL
      const message = "INTERNAL ERROR"
      ctx.status = code
      return ctx.res = new Error(message)
    }
  }

  async saveChronic(ctx: any) {
    try {
      const data = ctx.req.data

      const items = data.map((v: any) => {
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

      await ingressModel.saveChronic(items)
      ctx.res = { ok: true }
    } catch (error) {
      console.error(error)
      const code = grpc.status.INTERNAL
      const message = "INTERNAL ERROR"
      ctx.status = code
      return ctx.res = new Error(message)
    }
  }

  async saveOpd(ctx: any) {
    try {
      const data = ctx.req.data

      const items = data.map((v: any) => {
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
        delete v.timeServ
        delete v.insType
        delete v.insNumber
        delete v.insHospmain
        delete v.insHospsub
        delete v.diagText

        return v
      })

      await ingressModel.saveOpd(items)
      ctx.res = { ok: true }
    } catch (error) {
      console.error(error)
      const code = grpc.status.INTERNAL
      const message = "INTERNAL ERROR"
      ctx.status = code
      return ctx.res = new Error(message)
    }
  }

  async saveOpdx(ctx: any) {
    try {
      const data = ctx.req.data

      const items = data.map((v: any) => {
        const datedx = DateTime.fromFormat(v.datedx, "yyyyMMdd")
        const d_updated = DateTime.fromFormat(v.dUpdate, "yyyyMMddHHmmss")

        v.datedx = datedx.toFormat('yyyy-MM-dd')
        v.d_update = d_updated.toFormat('yyyy-MM-dd HH:mm:ss')
        // remove unused field
        delete v.dUpdate

        return v
      })

      await ingressModel.saveOpdx(items)
      ctx.res = { ok: true }
    } catch (error) {
      console.error(error)
      const code = grpc.status.INTERNAL
      const message = "INTERNAL ERROR"
      ctx.status = code
      return ctx.res = new Error(message)
    }
  }

  async saveOpop(ctx: any) {
    try {
      const data = ctx.req.data

      const items = data.map((v: any) => {
        const dateop = DateTime.fromFormat(v.dateop, "yyyyMMdd")
        const d_updated = DateTime.fromFormat(v.dUpdate, "yyyyMMddHHmmss")

        v.dateop = dateop.toFormat('yyyy-MM-dd')
        v.d_update = d_updated.toFormat('yyyy-MM-dd HH:mm:ss')
        // remove unused field
        delete v.dUpdate

        return v
      })

      await ingressModel.saveOpop(items)
      ctx.res = { ok: true }
    } catch (error) {
      console.error(error)
      const code = grpc.status.INTERNAL
      const message = "INTERNAL ERROR"
      ctx.status = code
      return ctx.res = new Error(message)
    }
  }

  async saveIpd(ctx: any) {
    try {
      const data = ctx.req.data

      const items = data.map((v: any) => {
        const dateadm = DateTime.fromFormat(v.dateadm, "yyyyMMdd")
        const datedsc = DateTime.fromFormat(v.datedsc, "yyyyMMdd")
        const d_updated = DateTime.fromFormat(v.dUpdate, "yyyyMMddHHmmss")

        v.dateadm = dateadm.toFormat('yyyy-MM-dd')
        v.datedsc = datedsc.toFormat('yyyy-MM-dd')
        v.adm_w = v.admW
        v.d_update = d_updated.toFormat('yyyy-MM-dd HH:mm:ss')
        // remove unused field
        delete v.dUpdate
        delete v.admW

        return v
      })

      await ingressModel.saveIpd(items)
      ctx.res = { ok: true }
    } catch (error) {
      console.error(error)
      const code = grpc.status.INTERNAL
      const message = "INTERNAL ERROR"
      ctx.status = code
      return ctx.res = new Error(message)
    }
  }

  async saveIpdx(ctx: any) {
    try {
      const data = ctx.req.data

      const items = data.map((v: any) => {
        const d_updated = DateTime.fromFormat(v.dUpdate, "yyyyMMddHHmmss")
        v.d_update = d_updated.toFormat('yyyy-MM-dd HH:mm:ss')
        // remove unused field
        delete v.dUpdate

        return v
      })

      await ingressModel.saveIpdx(items)
      ctx.res = { ok: true }
    } catch (error) {
      console.error(error)
      const code = grpc.status.INTERNAL
      const message = "INTERNAL ERROR"
      ctx.status = code
      return ctx.res = new Error(message)
    }
  }

  async saveIpop(ctx: any) {
    try {
      const data = ctx.req.data

      const items = data.map((v: any) => {
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

      await ingressModel.saveIpop(items)
      ctx.res = { ok: true }
    } catch (error) {
      console.error(error)
      const code = grpc.status.INTERNAL
      const message = "INTERNAL ERROR"
      ctx.status = code
      return ctx.res = new Error(message)
    }
  }

  async saveOpdDrug(ctx: any) {
    try {
      const data = ctx.req.data

      const items = data.map((v: any) => {
        const d_updated = DateTime.fromFormat(v.dUpdate, "yyyyMMddHHmmss")
        v.d_update = d_updated.toFormat('yyyy-MM-dd HH:mm:ss')
        v.unit_pack = v.unitPack
        // remove unused field
        delete v.dUpdate
        delete v.unitPack

        return v
      })

      await ingressModel.saveOpdDrug(items)
      ctx.res = { ok: true }
    } catch (error) {
      console.error(error)
      const code = grpc.status.INTERNAL
      const message = "INTERNAL ERROR"
      ctx.status = code
      return ctx.res = new Error(message)
    }
  }

  async saveIpdDrug(ctx: any) {
    try {
      const data = ctx.req.data

      const items = data.map((v: any) => {
        const d_updated = DateTime.fromFormat(v.dUpdate, "yyyyMMddHHmmss")
        v.d_update = d_updated.toFormat('yyyy-MM-dd HH:mm:ss')
        v.unit_pack = v.unitPack
        // remove unused field
        delete v.dUpdate
        delete v.unitPack

        return v
      })

      await ingressModel.saveIpdDrug(items)
      ctx.res = { ok: true }
    } catch (error) {
      console.error(error)
      const code = grpc.status.INTERNAL
      const message = "INTERNAL ERROR"
      ctx.status = code
      return ctx.res = new Error(message)
    }
  }

  async saveLab(ctx: any) {
    try {
      const data = ctx.req.data

      const items = data.map((v: any) => {
        const d_updated = DateTime.fromFormat(v.dUpdate, "yyyyMMddHHmmss")
        v.d_update = d_updated.toFormat('yyyy-MM-dd HH:mm:ss')
        // remove unused field
        delete v.dUpdate

        return v
      })

      await ingressModel.saveLab(items)
      ctx.res = { ok: true }
    } catch (error) {
      console.error(error)
      const code = grpc.status.INTERNAL
      const message = "INTERNAL ERROR"
      ctx.status = code
      return ctx.res = new Error(message)
    }
  }

  async saveAppoint(ctx: any) {
    try {
      const data = ctx.req.data

      const items = data.map((v: any) => {
        const appoint_date = DateTime.fromFormat(v.appointDate, "yyyyMMdd")
        const d_updated = DateTime.fromFormat(v.dUpdate, "yyyyMMddHHmmss")
        v.appoint_date = appoint_date.toFormat('yyyy-MM-dd')
        v.appoint_time = v.appointTime
        v.d_update = d_updated.toFormat('yyyy-MM-dd HH:mm:ss')

        // remove unused field
        delete v.appointDate
        delete v.appointTime
        delete v.dUpdate

        return v
      })

      await ingressModel.saveAppoint(items)
      ctx.res = { ok: true }
    } catch (error) {
      console.error(error)
      const code = grpc.status.INTERNAL
      const message = "INTERNAL ERROR"
      ctx.status = code
      return ctx.res = new Error(message)
    }
  }

  async saveDrugallergy(ctx: any) {
    try {
      const data = ctx.req.data

      const items = data.map((v: any) => {
        const daterecord = DateTime.fromFormat(v.daterecord, "yyyyMMdd")
        const d_updated = DateTime.fromFormat(v.dUpdate, "yyyyMMddHHmmss")
        v.daterecord = daterecord.toFormat('yyyy-MM-dd')
        v.d_update = d_updated.toFormat('yyyy-MM-dd HH:mm:ss')

        // remove unused field
        delete v.dUpdate

        return v
      })

      await ingressModel.saveDrugallergy(items)
      ctx.res = { ok: true }
    } catch (error) {
      console.error(error)
      const code = grpc.status.INTERNAL
      const message = "INTERNAL ERROR"
      ctx.status = code
      return ctx.res = new Error(message)
    }
  }

}