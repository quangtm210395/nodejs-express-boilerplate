
module.exports = (app) => {
  app.use('/api/loggers', require('./src/helper/logger-controller'))
  app.use('/api/node-demo', require('./src/api/node'))
}
