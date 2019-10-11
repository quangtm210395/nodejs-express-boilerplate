const levels = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
}

module.exports = {
  level: process.env.LOG_LEVEL || 'INFO',

  debug(message, ...params) {
    if (levels[this.level.toUpperCase()] > levels.DEBUG) return
    console.debug(`${new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')} DEBUG ${message}`, params)
  },
  info(message, ...params) {
    if (levels[this.level.toUpperCase()] > levels.INFO) return
    console.info(`${new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')} INFO ${message}`, params)
  },
  warn(message, ...params) {
    if (levels[this.level.toUpperCase()] > levels.WARN) return
    console.warn(`${new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')} WARN ${message}`, params)
  },
  error(message, ...params) {
    if (levels[this.level.toUpperCase()] > levels.ERROR) return
    console.error(`${new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')} ERROR ${message}`, params)
  },
}
module.exports.levels = levels
