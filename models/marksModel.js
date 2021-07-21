const mongoose = require('mongoose')
const marksSchema = mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Student',
    },
    subject: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Subject',
    },
    faculty: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Faculty',
    },
    mark: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Marks = mongoose.model('Marks', marksSchema)

module.exports = Marks
