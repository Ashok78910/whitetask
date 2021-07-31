const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
var bodyParser = require('body-parser')
const connectDB = require('./models/db')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')

const studentRoutes = require('./routes/studentRoutes')
const facultyRoutes = require('./routes/facultyRoutes')
const subjectRoutes = require('./routes/subjectRoutes')
const marksRoutes = require('./routes/marksRoutes')
const uploadRoutes = require('./routes/uploadRoutes')

dotenv.config({ path: path.resolve(__dirname, './.env') })

connectDB()

const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/students', studentRoutes)
app.use('/api/faculty', facultyRoutes)
app.use('/api/subjects', subjectRoutes)
app.use('/api/marks', marksRoutes)
app.use('/api/upload', uploadRoutes)

app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server runnig on port ${PORT}`))
