const expressLoader = require('./express');
const mongodbLoader = require('./mongodb');

function init(app, config) {
  expressLoader(app);
  mongodbLoader(config.mongodb);
}

module.exports = {
  init,
};
