const asyncHandler = require('express-async-handler')
const Subject = require('../models/subjectModel');

//@desc create a subject
//@route POST /api/subjects
//@access pivate

const addSubject =  asyncHandler(async(req,res)=>{
    const data = req.body
    const subject =  new Subject(data);
    const createdSubject = await subject.save()
    res.status(201).json(createdSubject)
});


//@desc fetch all subject
//@route GET /api/subjects
//@access public

const getSubject = asyncHandler(async(req,res) =>{
    const subjects = await Subject.find({})
    res.json(subjects)
})

module.exports = {
    addSubject,
    getSubject,
}