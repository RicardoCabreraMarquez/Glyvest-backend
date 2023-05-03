const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const pathFile = path.resolve(__dirname, 'paths.yml');
const schemasFile = path.resolve(__dirname, 'schemas.yml');
const securityFile = path.resolve(__dirname, 'security.yml');
const pathsF = yaml.load(fs.readFileSync(pathFile, 'utf8'));
const schemas = yaml.load(fs.readFileSync(schemasFile, 'utf8'));
const securitySchemes = yaml.load(fs.readFileSync(securityFile, 'utf8'));

module.exports = {
  openapi: '3.0.3',
  info: {
    version: '1.0.11',
    title: 'Editor de notas',
    description: 'RESTFull API Editor de notas',
    termsOfService: ' http://swagger.io/terms/',
  },
  servers: [{ url: 'http://localhost:3000/' }],
  paths: pathsF,
  components: {
    schemas,
    securitySchemes,
  },
};
