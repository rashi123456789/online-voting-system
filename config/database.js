const mongoose=require('mongoose')
const configureDB=()=>{     
    mongoose.connect('mongodb://localhost:27017/online-voting-system',{useUnifiedTopology:true,useNewUrlParser:true,useCreateIndex:true})
    .then(()=>{    //promises are .then and .catch
        console.log('connected to db')
    })
    .catch((err)=>{ //.then and .catch parameters are callback function eg. (err)
        console.log(err)
    })
}
module.exports=configureDB