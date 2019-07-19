const lib = require('../utils/lib')
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {

  if (req.body.query === undefined || !req.body.query.includes('mutation')) {
    next()
    return
  }

  next()
  // let token = req.headers['authorization']

  // if (!token) {
  //   res.status(401)
  //   res.json({ error: 'No token!' })
  //   return
  // }

  // try {
  //   req.user = jwt.verify(token, lib.secret)
  //   next()
  // } catch (error) {
  //   res.status(401)
  //   res.json({ error: 'Failed to authenticate token!' })
  // }
}