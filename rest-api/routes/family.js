const express = require('express');
const router = express.Router();
const familyController = require('../controller/familyController');
const middleware = require('../middleware/jwt-middleware');

router.post('/addSurvey', middleware, familyController.createFamily);
router.post('/assignMedicalCondition', middleware, familyController.assignMedicalCondition);

module.exports = router;