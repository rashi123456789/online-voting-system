const mongoose = require('mongoose')
const Schema = mongoose.Schema

const citizenSchema=new Schema({
    voterId:{
        type:String,
        required:true,
        unique:true,
        minlength:[4,'minimum 4 length is required']
    },
    password:{
        type:String,
        required:true,
        minlength:[8,'minimum 8 length is required'],
        maxlength:[128,'maximum 128 digitmongod']
    },
    name:{
        type:String,
        required:true,
        minlength:[3,'minimum 3 length is required'],
        unique:true
    },
    fathers_name:{
        type:String,
        required:true,
        minlength:[2,'minimum 3 length is required'],
        unique:true
    },
    dob:{
        type:Date,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})
const Citizen=mongoose.model('Citizen',citizenSchema)
module.exports=Citizen