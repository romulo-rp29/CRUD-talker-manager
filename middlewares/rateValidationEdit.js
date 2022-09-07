const status = require('../helpers/resDictionary');

const isRateValidEdit = (req, res, next) => {
    const { talk: { rate } } = req.body;
    if (!rate || rate === undefined) {
      return res.status(status.HTTP_BAD_REQUEST_STATUS).json({
        message: 'O campo "rate" é obrigatório' });
  }
  if (Number(rate) > 5) {
    return res.status(status.HTTP_BAD_REQUEST_STATUS).json({
      message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
}
    next();
};

module.exports = {
  isRateValidEdit,
};
