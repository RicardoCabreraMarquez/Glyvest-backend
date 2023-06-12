require('dotenv').config();

const puerto = process.env.APP_PORT;

const mongodb = {
  user: process.env.ATLAS_USER,
  pass: process.env.ATLAS_PASS,
  host: process.env.ATLAS_HOST,
  port: process.env.ATLAS_PORT,
  dbName: process.env.ATLAS_DBNAME,
};

const smtp = {
  accessToken: process.env.ACESSTOKEN,
  clientId: process.env.CLIENTID,
  clientSecret: process.env.CLIENTSECRET,
  refreshToken: process.env.REFRESHTOKEN,
  user: process.env.USER,
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
};

module.exports = {
  puerto,
  mongodb,
  smtp,
};
