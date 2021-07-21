const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const studentSchema = mongoose.Schema(
  {
    faculty: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Faculty',
    },
    name: {
      type: String,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

studentSchema.methods.matchPassword = async function (enterdPassword) {
  const password = this.password
  return await bcrypt.compare(enterdPassword, password)
}

studentSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

const Student = mongoose.model('Student', studentSchema)

module.exports = Student
