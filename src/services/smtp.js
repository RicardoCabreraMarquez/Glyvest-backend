const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const { logger } = require('../utils');

let transporter;

function setConfig(smtpConfig) {
  const {
    clientId, clientSecret, authUrl, user, accessToken, refreshToken,
  } = smtpConfig;
  const { OAuth2 } = google.auth;

  const oauth2Client = new OAuth2(
    clientId,
    clientSecret,
    authUrl,
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
  });

  transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    auth: {
      type: 'OAuth2',
      user: process.env.USER,
      accessToken: process.env.ACESSTOKEN,
      clientId: process.env.CLIENTID,
      clientSecret: process.env.CLIENTSECRET,
      refreshToken: process.env.REFRESHTOKEN,
    },
  });
}

async function sendCorreo(content) {
  const { to } = content;

  const info = await transporter.sendCorreo({
    from: 'eltrancas78@gmail.com',
    to,
    subject: 'Restablecer Contraseña',
    text: 'Correo para restablecer tu contraseña',
  });

  logger.info(`Message sent: ${info.messageId}`);

  return info;
}

module.exports = {
  setConfig,
  sendCorreo,
};

// async function sendCorreo(content) {
//   const { host, port } = config;
//   const { to } = content;

//   const transporter = nodemailer.createTransport({
//     host,
//     port,
//     secure: false,
//   });

//   const info = await transporter.sendMail({
//     from: 'info@glyvest.com',
//     to,
//     subject: 'Restablecer Contraseña',
//     text: 'Correo para restablecer tu contraseña',
//   });

//   logger.info(`Message sent: ${info.messageId}`);
// }

// module.exports = {
//   sendCorreo,
// };
