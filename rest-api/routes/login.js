const express = require('express');
const router = express.Router();
const loginController = require('../controller/loginController');
//const middleware = require('../middleware/jwt-middleware');

router.post('/login', loginController.login);
router.get('/getUsersData:idUser', loginController.getUsersData);

module.exports = router;