const router = require('express').Router();
const { loginController } = require('../controllers');
const { validateJWT, cookieCredentials } = require('../middlewares');

router.post('/', loginController.loginUser);
router.post('/signup', loginController.createUser);
router.get('/check', cookieCredentials, validateJWT, loginController.checkToken);

module.exports = router;
