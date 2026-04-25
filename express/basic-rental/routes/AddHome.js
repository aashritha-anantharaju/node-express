const express = require('express');
const router = express.Router();
const controller = require('../controllers/home');

router.get("/", controller.getHomes);
router.post("/home", controller.addHome);
router.get("/home/:id", controller.getHomeDetails);

module.exports = router