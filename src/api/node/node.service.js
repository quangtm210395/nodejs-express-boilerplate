
const logger = require('../../helper/logger-helper')
const setHeader = require('../../helper/header-helper')

module.exports = {
  /**
   * function-name: node-test-get-api
   */
  nodeTestGetApi: async (req, res, next) => {
    setHeader(res)
    try {
      logger.info('node-test-get-api request body: ', req.body)
      // processing

      res.status(200).json({
        message: 'This is node test get api demo',
        result: true,
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
