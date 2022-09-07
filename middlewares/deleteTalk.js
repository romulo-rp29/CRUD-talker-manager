const fs = require('fs');
const status = require('../helpers/resDictionary');

const PATH_FILE = './talker.json';

const deleteTalk = async (req, res) => {
  const { id } = req.params;
  const talkers = JSON.parse(fs.readFileSync(PATH_FILE));
  const talker = talkers.find((person) => person.id === Number(id));
  const index = talkers.indexOf(talker);
  talkers.splice(index);
  fs.writeFileSync(PATH_FILE, JSON.stringify(talkers));
  return res.status(status.HTTP_NO_CONTENT_STATUS).json(talker);
};
module.exports = { deleteTalk };
