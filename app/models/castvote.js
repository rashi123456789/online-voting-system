const mongoose = require('mongoose')
const Schema = mongoose.Schema

const castvoteSchema=new Schema({
    voterId:{
        type:String,
        required:true,
        unique:true,
        minlength:[4,'minimum 4 length is required']
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
    },
    dob:{
        type:Date,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    party:{
        type:Schema.Types.ObjectId,
        ref:'Party',
        required:true
    },
    candidate:{
        type:Schema.Types.ObjectId,
        ref:'Candidate',
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})
const Castvote=mongoose.model('Castvote',castvoteSchema)
module.exports=Castvote