const express = require('express');

const { paginaInicio } = require('../controllers');
const UserRouterUserMongodb = require('./user');
const UserRouterPublicationMongodb = require('./publication');
const authController = require('../controllers/authController');
const smtpController = require('../controllers/smtp');
const { verifyToken } = require('../middleware/verifyToken');

const router = express.Router();

router.get('/inicio', paginaInicio);
router.use('/user', UserRouterUserMongodb);
router.use('/file', UserRouterPublicationMongodb);
router.post('/login', authController.login);
router.post('/correo', verifyToken, smtpController.enviarCorreo);

module.exports = router;
