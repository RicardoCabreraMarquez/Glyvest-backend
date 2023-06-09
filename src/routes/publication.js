const express = require('express');

const { uploadMedia } = require('../middleware/multer/media');
const { subirArchivo, verArchivos, eliminarArchivos } = require('../controllers/publication');
const { verifyToken } = require('../middleware/verifyToken');

const router = express.Router();

router.post('', verifyToken, uploadMedia.single('myFile'), subirArchivo);
router.get('/see', verifyToken, verArchivos);
router.delete('/delete/:id', verifyToken, eliminarArchivos);
// router.post('', verifyToken, upload.single('myFile'), subirArchivo);

module.exports = router;
