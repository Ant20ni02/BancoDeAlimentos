const express = require('express');
const router = express.Router();
const surveyController = require('../controller/surveyController');
const middleware = require('../middleware/jwt-middleware');

router.post('/addSurvey', middleware, surveyController.addSurvey);
router.get('/getSurveyById/:idSurvey', middleware, surveyController.getSurveyById);

module.exports = router;