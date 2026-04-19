const express = require('express')
const app = express();


const userRouter = require('./routes/userRouter.js')
const contactRouter = require('./routes/contactRouter.js')
const controller = require('./controllers/contacts')


app.use(express.urlencoded());//body parser middleware
app.use(userRouter)
app.use(contactRouter)
app.set('view engine', 'ejs')
app.set('views', './views')

app.use(controller.notfound)


const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})