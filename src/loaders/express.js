const express = require('express');

const swaggerUI = require('swagger-ui-express');
const routes = require('../routes');
const swaggerDoc = require('../openai');

module.exports = server => {
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));
  server.use(routes);
  server.use((req, res) => res.status(404).send({ message: 'Not Found' }));
};
