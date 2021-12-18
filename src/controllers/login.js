const httpCodes = require('../constants/httpCodes.json');
const { loginServices } = require('../services');

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await loginServices.loginUserSvc({ email, password });
    return res.status(httpCodes.HTTP_OK).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginUser,
};
