const express = require("express");
const route = express.Router();
const loginController = require('../controllers/loginController.js')

route.post('/', loginController.login)

route.post('/forgot', loginController.forgotPassword)

module.exports = route;