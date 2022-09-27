const express = require('express');
const router = express.Router();
const questionController = require('../controller/questionController');
const middleware = require('../middleware/jwt-middleware');
 
router.post('/login', loginController.login);

module.exports = router;