const asyncHandler = require('express-async-handler')
const Faculty = require('../models/facultyModel')

//@desc create a faculty
//@route POST /api/faculty
//@access pivate

const createFaculty = asyncHandler(async (req, res) => {
  const data = req.body
  const faculty = new Faculty(data)
  const createdFaculty = await faculty.save()
  res.status(201).json(createdFaculty)
})

//@desc update a Faculty
//@route PUT /api/faculty/:id
//@access pivate

const updateFaculty = asyncHandler(async (req, res) => {
  const { name } = req.body

  const faculty = await Faculty.findById(req.params.id)

  if (faculty) {
    faculty.name = name
    const updatedFaculty = await faculty.save()
    res.json(updatedFaculty)
  } else {
    res.status(404)
    throw new Error('faculty not found')
  }
})

module.exports = {
  createFaculty,
  updateFaculty,
}
