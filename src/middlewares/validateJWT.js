const jwt = require('jsonwebtoken');
const AppError = require('../errors/AppError');
const httpCodes = require('../constants/httpCodes.json');
const errorMessages = require('../constants/errorMessages.json');
const { readJWT } = require('../utils/jwt');

const validateJWT = [
  (req, _res, next) => {
    let userPayload = null;
    try {
      const { token = null } = req.cookies;
      if (token) {
        userPayload = readJWT(token);
      } else {
        throw new AppError(httpCodes.HTTP_UNAUTHORIZED, errorMessages.MISSING_AUTH);
      }
      if (userPayload !== null) {
        const { email, role } = userPayload;
        req.user = { email, role };
        return next();
      }
      throw new AppError(httpCodes.HTTP_UNAUTHORIZED, errorMessages.BAD_JWT);
    } catch (error) {
      next(error);
    }
  },
  (err, _req, _res, next) => {
    if (err instanceof jwt.JsonWebTokenError) {
      const jwtError = new AppError(
        httpCodes.HTTP_UNAUTHORIZED,
        errorMessages.BAD_JWT,
      );
      next(jwtError);
    }
    next(err);
  },
];

module.exports = validateJWT;
