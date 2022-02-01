module.exports=(req,res,next)=>{
    console.log("Logging requests....");
    next();
}