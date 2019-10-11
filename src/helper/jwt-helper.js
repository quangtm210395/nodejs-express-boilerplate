const jwt = require('jsonwebtoken')
module.exports = {
  encode: async(payload, secret, issuer, subject, expiresIn) => {
    let token = await jwt.sign(payload, secret, {
      algorithm: 'HS512', 
      subject: subject,
      issuer: issuer,
      encoding: 'UTF-8',
      expiresIn,
    })
    return token
  },
  decode: async(token, secret) => {
    let data = await jwt.verify(token, secret, {
      algorithm: 'HS512'
    })
    return data
  }
}