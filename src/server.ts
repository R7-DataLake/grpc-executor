
const path = require('path')
const Mali = require('mali')
const jwt = require('jsonwebtoken')

import { IngressHandler } from "./handlers/ingress"

const secret = process.env.R7PLATFORM_GRPC_EXECUTOR_SECRET_KEY || ''

const ingressHandler = new IngressHandler()

let app: any

const PROTO_PATH = path.join(__dirname, '../protos/ingress.proto')

const HOSTPORT = '0.0.0.0:50051'

const verifyToken = (ctx: any, next: any) => {

  const authorization = ctx.request.metadata.authorization
  if (!authorization) {
    return ctx.res = new Error("authorization header is required")
  }

  const token = authorization.replace('Bearer ', '')

  try {
    ctx.user = jwt.verify(token, secret)
  } catch (err: any) {
    ctx.status = 401
    return ctx.res = new Error("Unauthorized")
  }

  return next()
}

const logger = async (ctx: any, next: any) => {
  const start = new Date()
  await next()
  const current = new Date()
  const ms = current.getTime() - start.getTime()
  console.log('%s : %s [%s] - %s ms', ctx.user.sub, ctx.name, ctx.type, ms)
}

const main = () => {
  app = new Mali(PROTO_PATH)

  app.on('error', (err: any, ctx: any) => {
    console.error('server error for call %s of type %s', ctx.name, ctx.type, err)
  })

  // Middleware
  app.use(verifyToken)
  app.use(logger)

  // Services
  app.use('SavePerson', ingressHandler.savePerson)
  app.use('SaveOpd', ingressHandler.saveOpd)
  app.use('SaveChronic', ingressHandler.saveChronic)
  app.use('SaveOpdx', ingressHandler.saveOpdx)
  app.use('SaveOpop', ingressHandler.saveOpop)
  app.use('SaveIpd', ingressHandler.saveIpd)
  app.use('SaveIpdx', ingressHandler.saveIpdx)
  app.use('SaveIpop', ingressHandler.saveIpop)
  app.use('SaveOpDrug', ingressHandler.saveOpDrug)
  app.use('SaveIpDrug', ingressHandler.saveIpDrug)
  app.use('SaveLab', ingressHandler.saveLab)
  app.use('SaveAppoint', ingressHandler.saveAppoint)
  app.use('SaveDrugallergy', ingressHandler.saveDrugallergy)
  app.use('Test', ingressHandler.test)

  // Start app
  app.start(HOSTPORT)
  console.log(`gRPC Executor service running at ${HOSTPORT}`)
}

const shutdown = async (err: any) => {
  if (err) console.error(err)
  await app.close()
  process.exit()
}

process.on('uncaughtException', shutdown)
process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)

main()