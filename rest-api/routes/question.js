const express = require('express');
const router = express.Router();
const questionController = require('../controller/questionController');
const middleware = require('../middleware/jwt-middleware');
 
router.post('/insertQuestion', middleware,questionController.insertQuestion);
router.post('/insertQuestionList', middleware,questionController.insertQuestionList);
router.get('/getAllAnswers/:idQuestion', middleware,questionController.getAllAnswers )
router.get('/getFrequency/:idQuestion', middleware, questionController.getFrequency);
router.get('/getQuantity/:systemType', middleware, questionController.getQuantity);

module.exports = router;