const router = require('express').Router();

router.get('/',(req,res)=>{
    res.send('Hello in our first REST APP.');
})

module.exports=router;