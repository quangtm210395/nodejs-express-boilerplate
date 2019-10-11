const router = require('express').Router()
const service = require('./node.service')

router.get('/', service.nodeTestGetApi)

router.post('/', service.nodeTestPostApi)

module.exports = router