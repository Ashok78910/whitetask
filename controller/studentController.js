const asyncHandler = require('express-async-handler')
const Student = require('../models/studentModel')
const generateToken = require('../utils/generatetoken')

//@desc Auth student & get token
//@route POST /api/students/login
//@access public

const authStudent = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const student = await Student.findOne({ email })
  if (student && (await student.matchPassword(password))) {
    res.json({
      _id: student._id,
      name: student.name,
      email: student.email,
      token: generateToken(student._id),
    })
  } else {
    res.status(401)
    throw new Error('invalid email and password')
  }
})

//@desc get Student profile
//@route POST /api/students/:id
//@access private

const getstudentProfile = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.student._id).populate(
    'faculty',
    'id name'
  )

  if (student) {
    res.json({
      _id: student._id,
      name: student.name,
      email: student.email,
      faculty: student.faculty,
      mark: student.mark,
    })
  } else {
    res.status(404)
    throw new Error('student not found')
  }
})

//@desc register student
//@route POST /api/students/
//@access public

const registerStudent = asyncHandler(async (req, res) => {
  const { name, email, password, mobile, faculty } = req.body
  const studentExists = await Student.findOne({ email })

  if (studentExists) {
    res.status(400)
    throw new Error('Student already exist')
  }

  const student = await Student.create({
    name,
    email,
    password,
    mobile,
    faculty,
  })
  if (student) {
    res.status(201).json({
      _id: student._id,
      name: student.name,
      email: student.email,
      mobile: student.mobile,
      faculty: student.faculty,
      token: generateToken(student._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid Student data')
  }
})

//@desc update student profile
//@route PUT /api/students/:id
//@access private

const updateStudentProfile = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.student._id)
  if (student) {
    student.name = req.body.name || student.name
    student.email = req.body.email || student.email
    student.mobile = req.body.mobile || student.mobile
    if (req.body.password) {
      student.password = req.body.password
    }

    const updatedStudent = await student.save()
    res.json({
      _id: updatedStudent._id,
      name: updatedStudent.name,
      email: updatedStudent.email,
      mobile: updatedStudent.mobile,
      token: generateToken(updatedStudent._id),
    })
  } else {
    res.status(404)
    throw new Error('user not found')
  }
})

//@desc get student
//@route get /api/students
//@access private/admin

const getStudents = asyncHandler(async (req, res) => {
  const students = await Student.find({}).populate('faculty', 'id name')
  res.json(students)
})

//@desc delete student
//@route delete /api/students/:id
//@access private/admin

const deleteStudent = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id)
  if (student) {
    await student.remove()
    res.json({ message: 'User removed' })
  } else {
    res.status(404)
    throw new Error('user not exist')
  }
})

module.exports = {
  authStudent,
  getstudentProfile,
  registerStudent,
  updateStudentProfile,
  getStudents,
  deleteStudent,
}
