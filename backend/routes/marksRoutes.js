const express = require('express')
const router = express.Router()
const {
  getMarks,
  createmarks,
  updateMarks,
  getstudentMarks,
} = require('../controller/marksContoller')
const protect = require('../middleware/authmiddleware')

router.route('/').post(createmarks).get(protect, getMarks)
router.route('/:id').get(protect, getstudentMarks)
router.route('/:id').put(protect, updateMarks)

module.exports = router
