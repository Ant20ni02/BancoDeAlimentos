const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const middleware = require('../middleware/jwt-middleware');
//const middleware = require('../middleware/jwt-middleware');

router.get('/getUsersData/:idUser', middleware, userController.getUsersData);

module.exports = router;