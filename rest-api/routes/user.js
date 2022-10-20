const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const middleware = require('../middleware/jwt-middleware');

router.get('/getUsersData/:idUser', middleware, userController.getUsersData);
router.put('/changeActiveStatus/:idUser', middleware, userController.changeUserStatus);
router.get('/getAllVolunteers', middleware, userController.getAllVolunteers);
router.get('/getActiveVolunteers', middleware, userController.getActiveVolunteers);
router.get('/getInactiveVolunteers', middleware, userController.getInactiveVolunteers);
router.delete('/deleteUser/:idUser', middleware, userController.deleteUser);

module.exports = router;