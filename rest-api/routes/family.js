const express = require('express');
const router = express.Router();
const familyController = require('../controller/familyController');
const middleware = require('../middleware/jwt-middleware');

router.post('/createFamily', middleware, familyController.createFamily);
router.post('/assignMedicalCondition', middleware, familyController.assignMedicalCondition);
router.get('/getFamilyTables', middleware, familyController.getFamilies);

module.exports = router;