const multer = require('multer');
const User = require('../../models/user');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './photoprofile');
  },
  filename: async (req, file, cb) => {
    try {
      const user = await User.findById(req.body.userId);

      if (user) {
        const { username } = user;
        cb(null, `photoprofile_${username}`);
      }
    } catch (err) {
      cb(err);
    }
  },
});

const fotoPerfil = (req, file, cb) => {
  if (file.mimetype.starWith('../../photoprofile.jpg')) {
    cb(null, true);
  } else {
    cb(new Error('El archivo no es una imagen valida como pepe castro.'));
  }
};

const uploadPhotoProfile = multer({ storage, fotoPerfil });

module.exports = { uploadPhotoProfile };
