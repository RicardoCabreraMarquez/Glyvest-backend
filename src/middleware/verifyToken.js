/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const secret = 'root';

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (token === undefined) {
    return res.status(401).json({ message: 'No se proporcionó un token de autenticación.' });
  }

  const tokenReal = req.headers.authorization.substring(7);

  try {
    const decodedToken = jwt.verify(tokenReal, secret);

    const user = await User.findById(decodedToken.userId);

    if (!user) {
      return res.status(401).json({ message: 'El usuario no está registrado.' });
    }

    req.user = user;

    next();
  } catch (err) {
    return res.status(401).send({ message: 'El token de autenticación no es válido.' });
  }
};

module.exports = {
  verifyToken,
};
