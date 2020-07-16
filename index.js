const express=require ('express')
const app=express()
const port=3001
app.use(express.json())
//importing database
const configureDB=require('./config/database')
configureDB()//calling database function

//importing router
const router=require('./config/routes')
app.use('/',router)

app.listen (port,()=>{
    console.log('listening to port',port)
})