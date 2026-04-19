const express = require('express')
const app = express();

const path = require('path');

const rootDir = require('./utils/filerouter')
const userRouter = require('./routes/userRouter.js')
const contactRouter = require('./routes/contactRouter.js')


app.use(express.urlencoded());//body parser middleware
app.use(userRouter)
app.use(contactRouter)

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,"views","404.html"))
})


const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})