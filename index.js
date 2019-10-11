// @ts-check
const express = require('express')
const http = require('http')

const config = require('./src/config')
const routes = require('./routes')
const logger = require('./src/helper/logger-helper')

const app = express()
const server = new http.Server(app)

// config express with body parser to read request body as object (json)
config.settingExpress(app)

// root routing
routes(app)

server.listen(process.env.SERVER_PORT || 8080, () => {
  logger.info(`Server running on ${process.env.SERVER_PORT || 8080}`)
})
