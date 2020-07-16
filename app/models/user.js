const mongoose=require('mongoose')//import mongoose
const isEmail = require('validator/lib/isEmail')
const Schema=mongoose.Schema//importing schema
const userSchema=new Schema({    //constructor of schema
    username:{
        type:String,  //defines datatype of username
        required:true, //mandatory
        minlength:[4,'minimum length should be greater than 4'],
        maxlength:18,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:{     
            validator:function(value){
                return isEmail(value)
            },
            message: function(){
                return('invalid email id')
            }
        }
    },
    password:{
        type:String,
        required:true,
        minlength:6,
        maxlength:128
    }
})
const User=mongoose.model('User',userSchema)
module.exports=User