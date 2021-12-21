const jwt = require('jsonwebtoken');
const AppError = require('../errors/AppError');
const { User } = require('../models');
const httpCodes = require('../constants/httpCodes.json');
const ajv = require('../schemas/validation');
const errorMessages = require('../constants/errorMessages.json');

const jwtConfig = {
  expiresIn: '30m',
  algorithm: 'HS256',
};

const loginUserSvc = async (user) => {
  const validate = ajv.getSchema('login');
  const isValid = validate(user);
  if (isValid) {
    const userLogged = await User.findOne({ where: { email: user.email } });
    if (userLogged && userLogged.get('password') === user.password) {
      const thisUser = userLogged.get({ plain: true });
      const { password: _, ...userWithOutPassword } = thisUser;
      const token = jwt.sign({ data: userWithOutPassword }, process.env.JWT_SECRET, jwtConfig);
      return { userWithOutPassword, token };
    }
    throw new AppError(
      httpCodes.HTTP_BAD_REQUEST,
      errorMessages.INCORRECT_AUTH,
    );
  }
  throw new AppError(httpCodes.HTTP_BAD_REQUEST, validate.errors[0].message);
};

const createUserSvc = async (user) => User.create(user);

module.exports = {
  loginUserSvc,
  createUserSvc,
};
