require('dotenv').config();
const jwt = require('jsonwebtoken');

module.export = function(userData) {
  const payload = {
    subject: userData.id,
    username: userData.username
  };

  const options = {
    expiresIn: '1d'
  };

  return jwt.sign(payload, process.env.SECRET_KEY, options);
};
