module.exports = {
  secret: require('crypto').randomBytes(256).toString('hex')
}