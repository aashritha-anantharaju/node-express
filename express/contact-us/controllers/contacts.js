const path = require('path');

const rootDir = require('../utils/filerouter')

exports.welcome=(req,res,next)=>{
    res.send(
        `<h1>Welcome to contact us page</h1>
        <a href="/contact-us">Contact us</a>`
    )
}

exports.contact= (req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","Contactus.html"))

}

exports.addedcontact =(req,res,next)=>{
    res.render('addedcontact',{name:req.body.name})
}

exports.notfound =(req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,"views","404.html"))
}