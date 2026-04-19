const express = require('express')
const userRouter = express.Router()

userRouter.get("/",(req,res,next)=>{
    res.send("Welcome to ExpressJS")
})

module.exports = userRouter