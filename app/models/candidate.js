const mongoose = require('mongoose')
const Schema = mongoose.Schema

const candidateSchema=new Schema({
   
    name:{
        type:String,
        required:true,
        minlength:[3,'minimum 3 length is required'],
        unique:true
    },

    age:{
        type:String,
        required:true,
        validate:{
            validator:function(value){
                return value>30
            },
            message:function(){
                return 'age should be greater than 30'
            }
        }
    },
     
    qualification:{
        type:String,
        required:true,
    },

    biography:{
        type:String,
        required:true,
        minlength:30
    },

    promises:{
        type:String,
        required:true,
        minlength:20
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
    
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})
const Candidate=mongoose.model('Candidate',candidateSchema)
module.exports=Candidate