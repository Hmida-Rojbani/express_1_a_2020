const express = require('express');
const Joi = require('joi');
const router = express.Router();

let students = [
    {id:1, name : "std1"},
    {id:2, name : "std2"},
    {id:3, name : "std3"}
];

router.get('/api/students', (req,res)=>{
    res.send(students);
});

router.get('/api/students/:id', (req,res)=>{
    const student = students.find(s=>s.id === parseInt(req.params.id));
    if(!student)
        return res.status(404).send('Student id not found');
    res.send(student);
});


const schema = Joi.object({
    name : Joi.string().min(3).required()
});
router.post('/api/students', (req,res)=>{
    const results = schema.validate(req.body);
    if(results.error)
        return res.status(400).send(results.error.details[0].message)
    const student = {
        id : students.length+1,
        name : req.body.name
    };
    students.push(student);
    res.send(student);
});

router.put('/api/students/:id', (req,res)=>{
    const student = students.find(s=>s.id === parseInt(req.params.id));
    if(!student)
        return res.status(404).send('Student id not found');
    const results = schema.validate(req.body);
    if(results.error)
        return res.status(400).send(results.error.details[0].message)
    student.name=req.body.name;
    res.send(student);
});

router.delete('/api/students/:id', (req,res)=>{
    const student = students.find(s=>s.id === parseInt(req.params.id));
    if(!student)
        return res.status(404).send('Student id not found');

    students = students.filter(s=>s.id !== parseInt(req.params.id));
    res.send(student);
});

module.exports=router;