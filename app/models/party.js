const mongoose = require('mongoose')
const Schema = mongoose.Schema

const partySchema=new Schema({

    name:{
        type:String,
        required:true,
        minlength:[3,'minimum 3 length is required'],
        unique:true
    },
 
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },

    symbol:{
        type:String
    }
})
const Party=mongoose.model('Party',partySchema)
module.exports=Party