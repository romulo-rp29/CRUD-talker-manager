const status = require('../helpers/resDictionary');

const isAgeValid = (req, res, next) => {
  const { age } = req.body;
  if (!age) {
    return res.status(status.HTTP_BAD_REQUEST_STATUS).json({
      message: 'O campo "age" é obrigatório',
    });
  }

  if (age < 18) {
    return res.status(status.HTTP_BAD_REQUEST_STATUS).json({
      message: 'A pessoa palestrante deve ser maior de idade',
    });
  }
  next();
};

module.exports = {
  isAgeValid,
};
