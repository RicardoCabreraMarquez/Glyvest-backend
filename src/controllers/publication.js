const mongoService = require('../services/mongodbservice/publication');

async function subirArchivo(req, res) {
  const archivo = req.file;
  const subiArchivo = await mongoService.uploadFile(req.body, archivo);
  res.status(201).send(subiArchivo);
}

async function verArchivos(req, res) {
  const archivos = await mongoService.seeFile();
  return res.status(201).send(archivos);
}

async function eliminarArchivos(req, res) {
  const eliminaArchivo = await mongoService.deleteFile(req.params);
  res.status(201).send(eliminaArchivo);
}

module.exports = {
  subirArchivo,
  verArchivos,
  eliminarArchivos,
};
