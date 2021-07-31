const express = require('express')
const router = express.Router()
const {
  authFaculty,
  createFaculty,
  updateFaculty,
} = require('../controller/facultyController')
const protect = require('../middleware/authmiddleware')

router.route('/').post(createFaculty)
router.route('/:id').put(protect, updateFaculty)

module.exports = router
