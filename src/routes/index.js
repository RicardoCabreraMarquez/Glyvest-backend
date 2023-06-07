const express = require('express');
const { User } = require('../models');

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
router.post('/login', authController.login, (req, res) => {
  const { username, password } = req.body;

  try {
    // Buscar el usuario en la base de datos
    const usuario = User.findOne({ username });

    if (!usuario) {
      return res.status(401).json({ error: 'Usuario y/o contraseña incorrectos' });
      console.log('Usuario y/o contraseña incorrectos');
    }

    if (password !== usuario.password) {
      return res.status(401).json({ error: 'Usuario y/o contraseña incorrectos' });
      console.log('Usuario y/o contraseña incorrectos');
    }

    // Inicio de sesión exitoso
    return res.json({ message: 'Inicio de sesión exitoso' });
    console.log('Inicio dde sesión exitoso');
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    return res.status(500).json({ error: 'Error al iniciar sesión' });
  }
});

router.post('/correo', verifyToken, smtpController.enviarCorreo);

module.exports = router;
