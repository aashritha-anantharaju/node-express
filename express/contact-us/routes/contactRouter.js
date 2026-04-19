const express = require('express')
const contactRouter = express.Router()
const controller = require('../controllers/contacts')

contactRouter.get("/contact-us",controller.contact)

contactRouter.post("/contact-us",controller.addedcontact)

module.exports = contactRouter