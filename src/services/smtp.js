const nodemailer = require('nodemailer');
const { logger } = require('../utils');

const { smtp: config } = require('../config');

async function sendCorreo(content) {
  const { host, port } = config;
  const { to } = content;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: false,
  });

  const info = await transporter.sendMail({
    from: 'info@glyvest.com',
    to,
    subject: 'Restablecer Contraseña',
    text: 'Correo para restablecer tu contraseña',
  });

  logger.info(`Message sent: ${info.messageId}`);
}

module.exports = {
  sendCorreo,
};
