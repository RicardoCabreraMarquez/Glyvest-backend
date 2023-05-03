const { Schema, model, Types } = require('mongoose');

const publicationSchema = new Schema({
  file: { type: String },
  ruta: { type: String },
  like: { type: Number },
  user: { type: Types.ObjectId, ref: 'User' },
});

module.exports = model('Publication', publicationSchema);
