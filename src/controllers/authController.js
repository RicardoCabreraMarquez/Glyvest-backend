const jwt = require('jsonwebtoken');
const User = require('../models/user');

// eslint-disable-next-line consistent-return
async function login(req, res, next) {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });

    if (!user) {
      return res.status(401).json({ message: 'El usuario y/o contraseña es incorrecta' });
    }

    const token = jwt.sign(
      { userId: user._id, username: user.username },
      'root',
      { expiresIn: '1h' },
    );

    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  login,
};
