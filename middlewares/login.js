const crypto = require('crypto');
const status = require('../helpers/resDictionary');

const login = (_req, res) => {
const token = crypto.randomBytes(8).toString('hex');
return res.status(status.HTTP_OK_STATUS).json({ token });
};

module.exports = { login };