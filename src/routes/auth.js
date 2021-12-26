const router = require('express').Router();
const { authController } = require('../controllers');
const { validateJWT, cookieCredentials } = require('../middlewares');

router.get('/check', cookieCredentials, validateJWT, authController.checkToken);
router.post('/login', authController.loginUser);
router.post('/signup', authController.createUser);

module.exports = router;
