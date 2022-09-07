const status = require('../helpers/resDictionary');

const isNameValid = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(status.HTTP_BAD_REQUEST_STATUS).json({
      message: 'O campo "name" é obrigatório',
    });
  }

  if (name.length < 3) {
    return res.status(status.HTTP_BAD_REQUEST_STATUS).json({
      message: 'O "name" deve ter pelo menos 3 caracteres',
    });
  }
  next();
};

module.exports = {
  isNameValid,
};
