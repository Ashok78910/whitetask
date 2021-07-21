const express = require('express')
const router = express.Router()
const {
  authStudent,
  getstudentProfile,
  registerStudent,
  updateStudentProfile,
  getStudents,
  deleteStudent,
} = require('../controller/studentController')
const protect = require('../middleware/authmiddleware')


router.route('/').post(registerStudent).get(protect, getStudents)
router.post('/login', authStudent)
router
  .route('/:id')
  .get(protect, getstudentProfile)
  .put(protect, updateStudentProfile)
router.route('/:id').delete(protect, deleteStudent)

module.exports = router
