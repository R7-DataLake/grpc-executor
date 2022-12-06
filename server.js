const path = require('path')
const Mali = require('mali')

const emr = require('./handlers/emr')

require('dotenv').config({ path: path.resolve(__dirname, './config') })

const PROTO_PATH = path.resolve(__dirname, './protos/emr.proto')

const HOSTPORT = '0.0.0.0:50051'

const logger = async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log('%s [%s] - %s ms', ctx.name, ctx.type, ms);
}

const main = () => {
  const app = new Mali(PROTO_PATH)

  app.on('error', (err, ctx) => {
    console.error('server error for call %s of type %s', ctx.name, ctx.type, err);
  })

  app.use(logger)

  app.use('GetPatient', emr.getPatient)
  app.use('GetPatientInfo', emr.getPatientInfo)

  app.start(HOSTPORT)
  console.log(`EMR service running at ${HOSTPORT}`)
}

main()