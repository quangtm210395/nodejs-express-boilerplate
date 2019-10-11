const jwt = require('jsonwebtoken')

module.exports = {
  encode: async (payload, secret, issuer, subject, expiresIn) => {
    const token = await jwt.sign(payload, secret, {
      algorithm: 'HS512',
      subject,
      issuer,
      encoding: 'UTF-8',
      expiresIn,
    })
    return token
  },
  decode: async (token, secret) => {
    const data = await jwt.verify(token, secret, {
      algorithm: 'HS512',
    })
    return data
  },
}
