const jwt=require('jsonwebtoken')
const User=require('../models/user')
const authenticateUsers=(req,res,next)=>{
    if(req.header('x-auth')){
        const token=req.header('x-auth')
        let tokenData
        try{
            tokenData=jwt.verify(token,'Rashi@123')
            User.findById(tokenData.id)
                .then((user)=>{
                    req.user=user
                    next()
                })
                .catch((err)=>{
                    res.json(err)
                })
        }catch(error){
            res.json(error.message)
        }
    }else{
        res.json({errors:"token not provided"})
    }
}
module.exports={authenticateUsers}