const fs = require('fs');
const status = require('../helpers/resDictionary');

const PATH_FILE = './talker.json';

const getTalkers = (_req, res) => {
    const talkers = JSON.parse(fs.readFileSync(PATH_FILE));
    return res.status(status.HTTP_OK_STATUS).json(
      talkers,
      );
  };

  module.exports = { getTalkers };