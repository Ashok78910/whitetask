const asyncHandler = require('express-async-handler')
const Marks = require('../models/marksModel')

//@desc create a marks
//@route POST /api/marks
//@access pivate

const createmarks = asyncHandler(async (req, res) => {
  const data = req.body
  if (data.mark < 100 && data.mark > 0) {
    const marks = new Marks(data)
    const createdMarks = await marks.save()
    res.status(201).json(createdMarks)
  } else {
    res.status(404)
    throw new Error('please enter valid marks between 1 to 100')
  }
})

//@desc update a marks
//@route PUT /api/marks/:id
//@access pivate

const updateMarks = asyncHandler(async (req, res) => {
  const { mark } = req.body

  const marks = await Marks.findById(req.params.id)

  if (marks) {
    marks.mark = mark

    const updatedmarks = await marks.save()
    res.json(updatedmarks)
  } else {
    res.status(404)
    throw new Error('marks not found')
  }
})

//@desc get Student marks
//@route POST /api/marks/:id
//@access private

const getstudentMarks = asyncHandler(async (req, res) => {
  const studentMarks = await Marks.findOne(req.params._id)
    .populate('student', 'id name')
    .populate('faculty', 'id name')
    .populate('subject', 'name status')
  if (studentMarks) {
    res.json({
      mark: studentMarks.mark,
      student: studentMarks.student,
      faculty: studentMarks.faculty,
      subject: studentMarks.subject,
    })
  } else {
    res.status(404)
    throw new Error('marks not found')
  }
})

//@desc get marks
//@route get /api/marks
//@access private/admin

const getMarks = asyncHandler(async (req, res) => {
  const marks = await Marks.find({})
    .populate('student', 'id name')
    .populate('faculty', 'id name')
    .populate('subject', 'name status')
  res.json(marks)
})

module.exports = {
  createmarks,
  updateMarks,
  getstudentMarks,
  getMarks,
}
