const express = require('express');

const { crearUsuario, eliminarUsuario, editarUsuario } = require('../controllers/user');
const { verifyToken } = require('../middleware/verifyToken');
const { uploadPhotoProfile } = require('../middleware/multer/photoprofile');

const router = express.Router();

router.post('', crearUsuario, uploadPhotoProfile.single(''));
router.delete('/delete/:username', verifyToken, eliminarUsuario);
router.put('/edit', verifyToken, editarUsuario);

module.exports = router;
