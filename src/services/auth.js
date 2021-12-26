const AppError = require('../errors/AppError');
const { User } = require('../models');
const httpCodes = require('../constants/httpCodes.json');
const ajv = require('../schemas/validation');
const errorMessages = require('../constants/errorMessages.json');
const { signJWT } = require('../utils/jwt');

const loginUserSvc = async (user) => {
  const validate = ajv.getSchema('login');
  const isValid = validate(user);
  if (isValid) {
    const userLogged = await User.findOne({
      where: { email: user.email },
    });
    if (userLogged && userLogged.get('password') === user.password) {
      const thisUser = userLogged.get({ plain: true });
      const { password: _, ...userWithOutPassword } = thisUser;
      const token = signJWT(userWithOutPassword);
      return { userWithOutPassword, token };
    }
    throw new AppError(
      httpCodes.HTTP_BAD_REQUEST,
      errorMessages.INCORRECT_AUTH,
    );
  }
  throw new AppError(httpCodes.HTTP_BAD_REQUEST, validate.errors[0].message);
};

const createUserSvc = async (user) => {
  await User.create(user);
  const { password: _, ...userWithOutPassword } = user;
  const token = signJWT(userWithOutPassword);
  return { token, userWithOutPassword };
};

module.exports = {
  loginUserSvc,
  createUserSvc,
};
