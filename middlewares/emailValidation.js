const status = require('../helpers/resDictionary');

const isValidEmail = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  if (!email || email.length === 0) {
 return res.status(status.HTTP_BAD_REQUEST_STATUS).json({
    message: 'O campo "email" é obrigatório',
  });
}

  if (!email.match(emailRegex)) {
 return res.status(status.HTTP_BAD_REQUEST_STATUS).json({
    message: 'O "email" deve ter o formato "email@email.com"',
  }); 
}
next();
};

module.exports = {
  isValidEmail,
};