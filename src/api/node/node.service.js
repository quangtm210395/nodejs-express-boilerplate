
const logger = require('../../helper/logger-helper')
const setHeader = require('../../helper/header-helper')
const config = require('../../config')
const {MongodbConnector} = require('../../helper/mongodb-helper')

module.exports = {
  /**
   * function-name: node-test-get-api
   */
  nodeTestGetApi: async (req, res, next) => {
    setHeader(res)
    try {
      logger.info('node-test-get-api request body: ', req.body)
      // processing
      /**
       * @type {import('mongodb').MongoClient} 
       * connect to mongodb 
       * */
      let client = await MongodbConnector.init(config.MONGO_URI, undefined)
      let players = await client.db().collection('players').find({}).toArray()
      logger.debug('players: ', players)
      res.status(200).json({
        message: 'This is node test get api demo',
        result: true,
        data: players,
      })
    } catch (error) {
      logger.error('node-test-get-api Error occur ', error)
    }
  },
  /**
   * function-name: node-test-post-api
   */
  nodeTestPostApi: async (req, res, next) => {
    setHeader(res)
    try {
      logger.info('node-test-post-api request body: ', req.body)
      res.status(200).json({
        result: true,
        message: 'this is node test post api',
      })
    } catch (error) {
      logger.error('Error occurs node-test-post-api: ', error)
    }
  },
}
