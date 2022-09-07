const fs = require('fs');
const status = require('../helpers/resDictionary');

const PATH_FILE = './talker.json';

const editTalk = async (req, res) => {
  const { id } = req.params;
  const { name, age, talk, talk: { rate, watchedAt } } = req.body;
  const talkers = JSON.parse(fs.readFileSync(PATH_FILE));
  const talker = talkers.find((person) => person.id === Number(id));

  talker.name = name;
  talker.age = age;
  talker.rate = rate;
  talker.watchedAt = watchedAt;
  talker.talk = talk;
  
  fs.writeFileSync(PATH_FILE, JSON.stringify(talkers));

  return res.status(status.HTTP_OK_STATUS).json(talker);
};

module.exports = { editTalk };