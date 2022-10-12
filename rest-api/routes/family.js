const express = require('express');
const router = express.Router();
const familyController = require('../controller/familyController');
const middleware = require('../middleware/jwt-middleware');

router.post('/createFamily', middleware, familyController.createFamily);
router.post('/assignMedicalCondition', middleware, familyController.assignMedicalCondition);
router.get('/getFamilyTables', middleware, familyController.getFamilies);
router.get('/getEnfermedades', middleware, familyController.getEnfermedades);
router.get('/getPregnancy', middleware, familyController.getPregnancy);
router.get('/idFamilyExists/:idFamily', middleware, familyController.idFamilyExists);

module.exports = router;