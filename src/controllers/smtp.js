const smtpService = require('../services/smtp');

async function enviarCorreo(req, res, next) {
  try {
    const { to } = req.body;
    const enviaCorreo = await smtpService.sendCorreo({ to });
    res.status(200).send({ id: enviaCorreo });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  enviarCorreo,
};
