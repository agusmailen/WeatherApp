const router = require('express').Router();

const existUser = require('../middlewares/UserCreate.middleware');
const UserController = require('../controllers/User.controller');
const User = new UserController();


router.post('/createUser', existUser, User.create.bind(User));

module.exports = router;