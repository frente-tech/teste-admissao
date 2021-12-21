const errorMiddleware = require('./errorMiddleware');
const validateJWT = require('./validateJWT');
const cookieCredentials = require('./cookieCredentials');

module.exports = {
  cookieCredentials,
  errorMiddleware,
  validateJWT,
};
