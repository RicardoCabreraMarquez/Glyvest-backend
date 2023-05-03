const { ObjectId } = require('mongodb');
const { Publication } = require('../../models');

async function uploadFile(fileData, archivo) {
  const date = new Date();
  const dateString = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}_${date.getHours().toString().padStart(2, '0')}-${date.getMinutes().toString().padStart(2, '0')}-${date.getSeconds().toString().padStart(2, '0')}`;
  const fichero = {
    ...fileData,
    file: `${dateString}_${archivo.originalname}`,
    ruta: archivo.path,
    like: 0,
  };
  return (await new Publication(fichero).populate('user')).save();
}

async function seeFile(files) {
  return Publication.find(files).populate('user');
}

async function deleteFile(id) {
  return Publication.findByIdAndDelete(new ObjectId(id));
}

module.exports = {
  uploadFile,
  seeFile,
  deleteFile,
};
