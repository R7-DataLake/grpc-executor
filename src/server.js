const path = require('path')
const Mali = require('mali')

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
  // Start app
  app.start(HOSTPORT)

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