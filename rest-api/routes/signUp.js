const express = require('express');
const router = express.Router();
const signUpController = require('../controller/signUpController.js');
const middleware = require('../middleware/jwt-middleware');

router.post('/signUp', signUpController.insertUsuario);
router.get('/getUsers', signUpController.getUsuarios);
router.get('/getIdUsuario/:idU', signUpController.getIdUsuario);
router.get('/phantom', middleware, signUpController.phantomEndpoint);


module.exports = router;