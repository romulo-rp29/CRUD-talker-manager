const status = require('../helpers/resDictionary');

const isValidToken = (req, res, next) => {
  const token = req.headers.authorization;
  const tokenRegex = new RegExp(/^[a-zA-Z0-9]{16}$/);

  if (!token) {
    return res.status(status.HTTP_UNAUTHORIZED_STATUS).json({
      message: 'Token não encontrado',
    });
  }

  if (!token.match(tokenRegex)) {
    return res.status(status.HTTP_UNAUTHORIZED_STATUS).json({
      message: 'Token inválido',
    });
  }

  next();
};

module.exports = { isValidToken };
