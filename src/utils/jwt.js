const jwt = require('jsonwebtoken');

const JWT_CONFIG = {
  expiresIn: '30m',
  algorithm: 'HS256',
};

const readJWT = (token) => jwt.verify(token, process.env.JWT_SECRET);

const signJWT = (data) => jwt.sign(data, process.env.JWT_SECRET, JWT_CONFIG);

module.exports = {
  readJWT,
  signJWT,
};
