const express = require('express');
const router = express.Router();
const questionController = require('../controller/questionController');
const middleware = require('../middleware/jwt-middleware');
 
router.post('/insertQuestion', middleware,questionController.insertQuestion);
router.get('/getAllAnswers/:idQuestion', middleware,questionController.getAllAnswers )

module.exports = router;