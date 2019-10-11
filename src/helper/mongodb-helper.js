// @ts-check

const { MongoClient } = require('mongodb')
const logger = require('./logger-helper')

class MongodbConnector {
  /**
   *
   * @param {import('mongodb').MongoClient} client
   */
  constructor(client) {
    this.client = client
  }

  /**
   * @param {string} url
   * @param {any} config
   */
  static async init(url, config) {
    if (MongodbConnector.client) { return MongodbConnector.client }
    const client = await MongoClient.connect(url,
      Object.assign({ useNewUrlParser: true }, config || {}))
    logger.info('Connected to mongodb: ', JSON.stringify(client['s']))
    MongodbConnector.client = client
    return client
  }

  static async close() {
    if (!MongodbConnector.client) return
    logger.info('Closing connection to mongodb: ', JSON.stringify(MongodbConnector.client['s']['url']))
    await MongodbConnector.client.close()
    MongodbConnector.client = null
  }

  /**
   * @param {string} url
   * @param {any} config
   */
  static async create(url, config) {
    const client = await MongoClient.connect(url,
      Object.assign({ useNewUrlParser: true }, config || {}))
    logger.info('Connected to mongodb: ', JSON.stringify(client['s']))
    return client
  }
}

MongodbConnector.client = undefined;

module.exports.MongodbConnector = MongodbConnector
