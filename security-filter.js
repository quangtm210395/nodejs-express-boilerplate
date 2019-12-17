
const JWT = require('./src/helper/jwt-helper')
const Redis = require('ioredis')

let redis

module.exports = {
  authorities: {
    'USER': {
      prefix: 'U',
      value: 'USER'
    },
  },
  authenticationFilter: async function (req, res, next) {
    if (!req.headers['authorization']) return next()
    let token = req.headers['authorization'].replace(new RegExp('Bearer ', 'g'), '')
    logger.debug('Auth token: ', token)
    let data = undefined
    try {
      data = await JWT.decode(token, config.JWT_SECRET)
    } catch (err) {
      logger.error('Decode Token error: ', err)
      res.status(403).json({
        'result': false,
        'code': 403,
        'message': 'DECODED TOKEN ERROR: ' + err.message
      })
      return
    }
    if (data) {
      let subject = data['sub']
      let fastgoId = subject.slice(1)
      let authentication = {
        'fastgoId': fastgoId
      }
      let roles = []
      if (data['roles']) {
        roles = data['roles']
        // authentication['authorities'] = roles
      }
      let authorities = []
      for (let role of roles) {
        if (!redis) {
          redis = new Redis(config.REDIS_PORT, config.REDIS_HOST)
        }
        let authority = this.authorities[role]
        if (authority) {
          try {
            if (role === 'INSIDE') authorities.push(role)
            else {
              let isMember = await redis.sismember(authority.prefix + fastgoId, token)
              logger.debug('redis is member: ', isMember)
              if (isMember) {
                authorities.push(role)
              }
            }
          } catch (err) {
            logger.error('error occur ', err)
          }
        }
        if (authorities.length !== 0) {
          authentication['authorities'] = authorities
          req['authentication'] = authentication
        }
      }
    }
    next()
  },
  authorizationFilter: async function (req, res, next) {

  }
}