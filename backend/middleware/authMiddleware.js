const jwt = require('jsonwebtoken')
const Admin = require('../model/admin')

const checkAuth = async(req, res, next) => {
  let token
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1]
      const decoded = jwt.verify(token, 'madara_uchiha')
      if(decoded) {
        next()
      }
    } catch (error) {
      res.send({error: 'Not authorized!!'})
    }
  }
}

module.exports = checkAuth