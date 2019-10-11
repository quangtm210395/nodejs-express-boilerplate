const router = require('express').Router()
const logger = require('./logger-helper')
const setHeader = require('./header-helper')

router.get('/', async (req, res) => {
  setHeader(res)
  try {
    res.status(200).json({
      configuredLevel: logger.level
    })
  } catch (error) {
    logger.error('Error occurs: ', error)
  }
})
router.post('/', async (req, res) => {
  try {
    if (req.body.configuredLevel.toUpperCase() in logger.levels) {
      logger.level = req.body.configuredLevel.toUpperCase()
      res.status(204).send()
    } 
  } catch (error) {
    logger.error('Error occurs: ', error)
    res.status(400).send()
  }
})

module.exports = router