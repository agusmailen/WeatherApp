const router = require('express').Router();

const existUser = require('../middlewares/UserCreate.middleware');
const verifyToken = require('../middlewares/VerifyToken.middleware');
const UserController = require('../controllers/User.controller');
const User = new UserController();


router.post('/createUser', verifyToken, existUser, User.create.bind(User));
router.post('/loginUser', verifyToken, User.login.bind(User));

module.exports = router;