const jwt = require('jsonwebtoken');
const AppError = require('../errors/AppError');
const httpCodes = require('../constants/httpCodes.json');
const errorMessages = require('../constants/errorMessages.json');

const validateJWT = [
  (req, _res, next) => {
    let userPayload = null;
    try {
      const { token = null } = req.cookies;
      if (token) {
        userPayload = jwt.verify(token, process.env.JWT_SECRET);
      } else {
        throw new AppError(httpCodes.HTTP_UNAUTHORIZED, errorMessages.MISSING_AUTH);
      }
      if (userPayload !== null) {
        const { email, role } = userPayload.data;
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
      const error = new AppError(
        httpCodes.HTTP_UNAUTHORIZED,
        errorMessages.BAD_JWT,
      );
      next(error);
    }
    next(err);
  },
];

module.exports = validateJWT;
