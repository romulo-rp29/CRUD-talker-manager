const fs = require('fs');
const status = require('../helpers/resDictionary');

const PATH_FILE = './talker.json';

const addTalk = async (req, res) => {
  const { name, age, talk } = req.body;
  const talkers = JSON.parse(fs.readFileSync(PATH_FILE));
  const talker = {
    id: Number(talkers.length + 1),
    name,
    age,
    talk,
  };
  talkers.push(talker);
  fs.writeFileSync(PATH_FILE, JSON.stringify(talkers));
  res.status(status.HTTP_CREATED_STATUS).json(talker);
};

module.exports = { addTalk };