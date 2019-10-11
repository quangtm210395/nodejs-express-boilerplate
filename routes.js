
module.exports = (app) => {
  app.use('/api/loggers', require('./src/helper/logger-controller'))
}