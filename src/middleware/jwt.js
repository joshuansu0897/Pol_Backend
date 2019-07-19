const lib = require('../utils/lib')
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  let token = req.headers['authorization']

  try {
    req.user = jwt.verify(token, lib.secret)
  } catch (error) {
    req.user = null
  }

  next()
}