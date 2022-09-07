const status = require('../helpers/resDictionary');

const isValidPassword = (req, res, next) => {
  const { password } = req.body;
  if (!password || password.length === 0) {
    return res.status(status.HTTP_BAD_REQUEST_STATUS).json({
      message: 'O campo "password" é obrigatório',
    });
  }

  if (password.length < 6) {
    return res.status(status.HTTP_BAD_REQUEST_STATUS).json({
      message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  next();
};

module.exports = {
  isValidPassword,
};