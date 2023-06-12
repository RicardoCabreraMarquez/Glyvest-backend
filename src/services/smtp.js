const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const { logger } = require('../utils');

const { smtp: config } = require('../config');

async function sendCorreo(content) {
  const { user, accessToken, clientId, clientSecret, refreshToken } = config;
  const { to } = content;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    auth: {
      type: 'OAuth2',
      user,
      accessToken,
      clientId,
      clientSecret,
      refreshToken,
    },
  });

  const info = await transporter.sendMail({
    from: 'eltrancas78@gmail.com',
    to,
    subject: 'Restablecer Contraseña',
    text: 'Correo para restablecer tu contraseña',
  });

  logger.info(`Message sent: ${info.messageId}`);
}

module.exports = {
  sendCorreo,
};
