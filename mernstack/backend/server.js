require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const workoutroutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

 const app = express()

 app.use(express.json())

 app.use('/api/workouts',workoutroutes)
 app.use('/api/user',userRoutes)

 //connect to db
 mongoose.connect(process.env.MONG_URI)
 .then(()=>{
    app.listen(process.env.PORT, ()=> {
        console.log('connected to db and listening port',process.env.PORT)
     })
 })
 .catch((error)=>{
    console.log(error)
 })
