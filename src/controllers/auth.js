// const httpCodes = require('../constants/httpCodes.json');
// const { AppError } = require('../errors');
const { authServices } = require('../services');

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { token, userWithOutPassword } = await authServices.loginUserSvc({
      email,
      password,
    });
    res
      .cookie('token', token, {
        expires: new Date(new Date().getTime() + 30 * 60 * 1000),
        sameSite: 'strict',
        httpOnly: true,
      })
      .json({ ...userWithOutPassword });
  } catch (error) {
    next(error);
  }
};

const checkToken = async (req, res, next) => {
  try {
    res.status(200).json({ ...req?.user });
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    const { name, address, birthdate, cpf, password, email } = req.body;
    const { token, userWithOutPassword } = await authServices.createUserSvc(
      { name, address, birthdate, cpf, password, email, role: 'user',
      },
    );
    res
      .cookie('token', token, {
        expires: new Date(new Date().getTime() + 30 * 60 * 1000),
        sameSite: 'strict',
        httpOnly: true,
      })
      .json({ ...userWithOutPassword });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginUser,
  createUser,
  checkToken,
};
