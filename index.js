const express = require('express');
const bodyParser = require('body-parser');
const status = require('./helpers/resDictionary');

const { isValidEmail } = require('./middlewares/emailValidation');
const { isValidPassword } = require('./middlewares/passwordValidation');
const { isNameValid } = require('./middlewares/nameValidation');
const { isAgeValid } = require('./middlewares/ageValidation');
const { isTalkValid } = require('./middlewares/talkValidation');
const { isWatchedAtValid } = require('./middlewares/watchedAtValidation');
const { isRateValid } = require('./middlewares/rateValidation');
const { isValidToken } = require('./middlewares/tokenValidation');
const { addTalk } = require('./middlewares/addTalk');
const { editTalk } = require('./middlewares/editTalk');
const { deleteTalk } = require('./middlewares/deleteTalk');
const { searchTalk } = require('./middlewares/searchTalk');
const { getTalkers } = require('./middlewares/getTalkers');
const { getTalkerById } = require('./middlewares/getTalkerById');
const { login } = require('./middlewares/login');

const app = express();
app.use(bodyParser.json());

const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(status.HTTP_OK_STATUS).send();
});

app.get('/talker',
  getTalkers);

app.get('/talker/search',
  isValidToken,
  searchTalk);

app.get('/talker/:id',
getTalkerById);

app.post('/login',
  isValidEmail,
  isValidPassword,
  login);

app.post('/talker',
isValidToken,
isNameValid,
isAgeValid,
isTalkValid,
isWatchedAtValid,
isRateValid,
addTalk);

app.put('/talker/:id',
isValidToken,
isNameValid,
isAgeValid,
isTalkValid,
isWatchedAtValid,
isRateValid,
editTalk);

app.delete('/talker/:id',
isValidToken,
deleteTalk);

app.listen(PORT, () => {
  console.log('Online');
});
