const jwt = require('jsonwebtoken')
const Student = require('../models/studentModel')
const asyncHandler = require('express-async-handler')

const protect = asyncHandler(async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      //select is used for don't wand password in user detail
      req.student = await Student.findById(decoded.id).select('-password')
      next()
    } catch (err) {
      console.log(err)
      res.status(401)
      throw new Error('not uthorized,token failed')
    }
  }
  if (!token) {
    res.status(401)
    throw new Error('not uthorized,no token')
  }
})

module.exports = protect
