const mongoService = require('../services/mongodbservice/user');

async function crearUsuario(req, res) {
  const creaUsuario = await mongoService.createUser(req.body);
  res.status(201).send(creaUsuario);
}

async function editarUsuario(req, res) {
  const editaUsuario = await mongoService.editUser(req.body);
  res.status(201).send(editaUsuario);
}

async function eliminarUsuario(req, res) {
  const eliminaUsuario = await mongoService.deleteUser(req.params.username);
  res.status(201).send(eliminaUsuario);
}

module.exports = {
  crearUsuario,
  eliminarUsuario,
  editarUsuario,
};
