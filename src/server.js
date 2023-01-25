const path = require('path')
const Mali = require('mali')
const fs = require('fs')
const grpc = require('@grpc/grpc-js')

const ingress = require('./handlers/ingress')

let app

require('dotenv').config({ path: path.resolve(__dirname, '../config.conf') })

const PROTO_PATH = path.resolve(__dirname, '../protos/ingress.proto')

const HOSTPORT = '0.0.0.0:50051'

const logger = async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log('%s [%s] - %s ms', ctx.name, ctx.type, ms);
}

const main = () => {
  app = new Mali(PROTO_PATH)

  app.on('error', (err, ctx) => {
    console.error('server error for call %s of type %s', ctx.name, ctx.type, err);
  })

  app.use(logger)
  // Services
  app.use('SavePerson', ingress.savePerson)
  app.use('SaveOpd', ingress.saveOpd)
  app.use('SaveChronic', ingress.saveChronic)
  app.use('SaveOpdx', ingress.saveOpdx)
  app.use('SaveOpop', ingress.saveOpop)
  app.use('SaveIpd', ingress.saveIpd)
  app.use('SaveIpdx', ingress.saveIpdx)
  app.use('SaveIpop', ingress.saveIpop)
  app.use('SaveDrug', ingress.saveDrug)
  app.use('SaveLab', ingress.saveLab)
  app.use('SaveAppoint', ingress.saveAppoint)
  app.use('SaveDrugallergy', ingress.saveDrugallergy)


  let credentials = grpc.ServerCredentials.createSsl(
    fs.readFileSync('./certs/ca.crt'), [{
      cert_chain: fs.readFileSync('./certs/server.crt'),
      private_key: fs.readFileSync('./certs/server.key')
    }], true);


  // Start app
  app.start(HOSTPORT, credentials)
  console.log(`Ingress service running at ${HOSTPORT}`)
}

const shutdown = async (err) => {
  if (err) console.error(err)
  await app.close()
  process.exit()
}

process.on('uncaughtException', shutdown)
process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)

main()