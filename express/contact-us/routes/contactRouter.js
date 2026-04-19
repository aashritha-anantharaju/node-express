const express = require('express')
const contactRouter = express.Router()
const path = require('path')
const rootDir = require('../utils/filerouter')

contactRouter.get("/contact-us",(req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","Contactus.html"))

})

contactRouter.post("/contact-us",(req,res,next)=>{
    res.send(`Will be contacting you soon ${req.body.name}`)
})

module.exports = contactRouter