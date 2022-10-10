const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const middleware = require('../middleware/jwt-middleware');
//const middleware = require('../middleware/jwt-middleware');

router.get('/getUsersData/:idUser', middleware, userController.getUsersData);
router.put('/changeActiveStatus/:idUser', middleware, userController.changeUserStatus);
router.get('/getAllVolunteers', middleware, userController.getAllVolunteers);

module.exports = router;