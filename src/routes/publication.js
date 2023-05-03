const express = require('express');

const { upload } = require('../middleware/multer');
const { subirArchivo, verArchivos, eliminarArchivos } = require('../controllers/publication');
const { verifyToken } = require('../middleware/verifyToken');

const router = express.Router();

router.post('', verifyToken, upload.single('myFile'), subirArchivo);
router.get('/see', verifyToken, verArchivos);
router.delete('/delete/:id', verifyToken, eliminarArchivos);
// router.post('', verifyToken, upload.single('myFile'), subirArchivo);

module.exports = router;
