const express = require('express');

const loaders = require('./loaders');
const config = require('./config');
const { logger } = require('./utils');

const app = express();

const { puerto } = config;

loaders.init(app, config);

app.listen(puerto, () => {
  logger.info(`Example app listening on ${puerto}`);
});

module.exports = {
  app,
};
