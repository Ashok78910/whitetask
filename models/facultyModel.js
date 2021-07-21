const mongoose = require('mongoose')

const facultySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
})

const Faculty = mongoose.model('Faculty', facultySchema)

module.exports = Faculty
