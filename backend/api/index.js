import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import authRouter  from '../routes/authRoute.js'
import  itemRouter from '../routes/itemRoutes.js'
const app = express()
app.use(cors())
dotenv.config()
app.use(express.json())

mongoose.connect(process.env.MONGO).then(()=>{
  console.log('Database is connected')
  app.listen(3000,()=>{
    console.log('serveris running succesfully')
  })
  })
  .catch((error)=>{
    console.log(error)
  })

  app.use('/api/auth',authRouter)
  app.use('/api/item',itemRouter)