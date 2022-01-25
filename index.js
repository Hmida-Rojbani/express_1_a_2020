const express = require('express');

const app = express();
const port = process.env.PORT||3000;

let students = [
    {id:1, name : "std1"},
    {id:2, name : "std2"},
    {id:3, name : "std3"}
];


app.get('/api/students', (req,res)=>{
    res.send(students);
});
app.get('/api/students/:id', (req,res)=>{
    const student = students.find(s=>s.id === parseInt(req.params.id));
    if(!student)
        return res.status(404).send('Student id not found');
    res.send(student);
});



var quotes = {
    'einstein': 'The only reason for time is so that everything doesn\'t happen at once.',
    'tesla' : 'The scientists of today think deeply instead of clearly. One must be sane to think clearly, but one can think deeply and be quite insane'
}
app.get('/quotes/:name',(req,res)=>{
    res.send(quotes[req.params.name]);
});

app.get('/',(req,res)=>{
    res.send('Hello in our first REST APP.');
})

app.listen(port,()=>console.log(`Server running on ${port}`));