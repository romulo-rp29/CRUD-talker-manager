const fs = require('fs');
const status = require('../helpers/resDictionary');

const PATH_FILE = './talker.json';

const getTalkerById = (req, res) => {
    const { id } = req.params;
    const talkers = JSON.parse(fs.readFileSync(PATH_FILE));
    const talker = talkers.find((person) => person.id === Number(id));
    if (!talker) {
   return res.status(status.HTTP_NOT_FOUND_STATUS).json({
      message: 'Pessoa palestrante não encontrada' }); 
  }
    return res.status(status.HTTP_OK_STATUS).json(talker);
  };

  module.exports = { getTalkerById };