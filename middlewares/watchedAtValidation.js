const status = require('../helpers/resDictionary');
  
const isWatchedAtValid = (req, res, next) => {
  const { talk: { watchedAt } } = req.body;
  const dataRegex = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
  const validDate = dataRegex.test(watchedAt);
  if (!watchedAt) {
    return res.status(status.HTTP_BAD_REQUEST_STATUS).json({
         message: 'O campo "watchedAt" é obrigatório' });
     }
     if (!validDate) {
       return res.status(status.HTTP_BAD_REQUEST_STATUS).json({
         message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
     }
     next();
};

module.exports = {
  isWatchedAtValid,
};
