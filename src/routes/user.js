const express = require('express');

const { crearUsuario, eliminarUsuario, editarUsuario } = require('../controllers/user');
const { verifyToken } = require('../middleware/verifyToken');

const router = express.Router();

router.post('', crearUsuario);
router.delete('/delete/:username', verifyToken, eliminarUsuario);
router.put('/edit', verifyToken, editarUsuario);

module.exports = router;
