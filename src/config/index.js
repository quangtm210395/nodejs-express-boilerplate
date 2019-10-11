// @ts-check
const bodyParser = require('body-parser')

module.exports = {
  /**
   * @param {import('express').Express} app
   */
  settingExpress: (app) => {
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
  },
  MONGO_URI: process.env.MONGO_URI || `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB_NAME}`,
}
