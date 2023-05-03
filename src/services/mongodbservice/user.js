/* eslint-disable no-use-before-define */
const { User } = require('../../models');

async function createUser(body) {
  return new User(body).save();
}

async function editUser(body) {
  const { email, ...datosact } = body;
  return User.findOneAndUpdate({ email }, datosact);
}

async function deleteUser(username) {
  return User.remove({ username });
}

module.exports = {
  createUser,
  deleteUser,
  editUser,
};
