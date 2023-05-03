const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  followers: { type: Types.ObjectId, ref: 'User' },
});

module.exports = model('User', userSchema);
