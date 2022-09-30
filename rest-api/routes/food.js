const express = require('express');
const router = express.Router();
const foodController = require('../controller/foodController');
const middleware = require('../middleware/jwt-middleware');

router.post('/createFoodSuggestion', middleware, foodController.createFoodSuggestion);
router.get('/getAvailableFood', middleware, foodController.getAvailableFood);
router.put('/updateFoodQuantity', middleware, foodController.updateFoodAvailable);

module.exports = router;