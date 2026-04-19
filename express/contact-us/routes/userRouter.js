const express = require('express')
const userRouter = express.Router()
const controller = require('../controllers/contacts')

userRouter.get("/",controller.welcome)

module.exports = userRouter