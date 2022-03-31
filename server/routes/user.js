const router = require('express').Router();

const UserController = require('../controllers/User.controller');
const User = new UserController();

router.get('/', (req, res) => {
	res.send("hello word")
})

router.post('/createUser', User.create.bind(User));

module.exports = router;