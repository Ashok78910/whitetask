const express = require('express')
const router = express.Router()
const {
    addSubject,
    getSubject,
   
} = require('../controller/subjectcontoller')
const protect = require('../middleware/authmiddleware')

router.route('/').post(addSubject).get(protect,  getSubject)

module.exports = router
