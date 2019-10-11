// @ts-check
const express = require('express')
const http = require('http')
const fs = require('fs')

const config = require('./src/config')
const routes = require('./routes')
const logger = require('./src/helper/logger-helper')

const {MongodbConnector} = require('./src/helper/mongodb-helper')

const app = express()
const server = new http.Server(app)

// config express with body parser to read request body as object (json)
config.settingExpress(app)

// root routing
routes(app)

server.listen(process.env.SERVER_PORT || 8080, async () => {
  logger.info(`Server running on ${process.env.SERVER_PORT || 8080}`)
  /**@type {import('mongodb').MongoClient} */
  let client = await MongodbConnector.init(config.MONGO_URI, undefined)
  let count = await client.db().collection('players').count({})
  if (count == 0) {
    let data = JSON.parse(fs.readFileSync('./data.json', {encoding: 'UTF-8'}))
    let insertResult = await client.db().collection('players').insertMany(data)
    logger.info('inserted result: ', insertResult)
  }
})
