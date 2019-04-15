const jwt = require('jsonwebtoken');

require('dotenv').config();

module.exports = function(req, res, next) {
  const token = req.get('Authorization');

  if (token) {
    return jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) return res.status(401).json({ error: err });
      req.decoded = decoded;
      next();
    });
  }
  return res.status(401).json({
    error: 'No token provided!'
  });
};
