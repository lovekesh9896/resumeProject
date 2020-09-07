const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');
console.log("Router is loaded");

router.get('/', homeController.home);
router.post('/send-message',homeController.sendMessage);
module.exports = router;