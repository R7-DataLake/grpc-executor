import { IngressHandler } from "./handlers/ingress"

const path = require('path')
const Mali = require('mali')
const fs = require('fs')
const grpc = require('@grpc/grpc-js')

const ingressHandler = new IngressHandler()

let app: any

const PROTO_PATH = path.resolve(__dirname, '../protos/ingress.proto')

const HOSTPORT = '0.0.0.0:50051'

const logger = async (ctx: any, next: any) => {
  const start = new Date()
  await next()
  const current = new Date()
  const ms = current.getTime() - start.getTime()
  console.log('%s [%s] - %s ms', ctx.name, ctx.type, ms)
}

const main = () => {
  app = new Mali(PROTO_PATH)

  app.on('error', (err: any, ctx: any) => {
    console.error('server error for call %s of type %s', ctx.name, ctx.type, err)
  })

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
  app.use('SaveDrug', ingressHandler.saveDrug)
  app.use('SaveLab', ingressHandler.saveLab)
  app.use('SaveAppoint', ingressHandler.saveAppoint)
  app.use('SaveDrugallergy', ingressHandler.saveDrugallergy)

  let credentials = grpc.ServerCredentials.createSsl(
    fs.readFileSync(path.resolve(__dirname, '../certs/ca.crt')), [{
      cert_chain: fs.readFileSync(path.resolve(__dirname, '../certs/server.crt')),
      private_key: fs.readFileSync(path.resolve(__dirname, '../certs/server.key'))
    }], true)


  // Start app
  app.start(HOSTPORT, credentials)
  console.log(`Ingress service running at ${HOSTPORT}`)
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