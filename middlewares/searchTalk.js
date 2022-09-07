// const fs = require('fs');
const fs = require('fs');
const status = require('../helpers/resDictionary');

const PATH_FILE = './talker.json';

const searchTalk = async (req, res) => {
  const { q: searchTerm } = req.query;
  const talkers = JSON.parse(fs.readFileSync(PATH_FILE));

  const talker = talkers.filter((person) => person.name.includes(searchTerm));
  
  if (!searchTerm) {
    return res.status(status.HTTP_OK_STATUS).json(talkers);
  }
  
  return res.status(status.HTTP_OK_STATUS).json(talker);
};

module.exports = { searchTalk };