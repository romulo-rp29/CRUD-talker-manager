const status = require('../helpers/resDictionary');

const isTalkValid = (req, res, next) => {
  const { talk } = req.body;
  if (!talk) {
 return res.status(status.HTTP_BAD_REQUEST_STATUS).json({
      message: 'O campo "talk" é obrigatório' });
  }
  next();
};

module.exports = {
  isTalkValid,
};
