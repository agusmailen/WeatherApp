const router = require('express').Router();

router.get('/createUser', (req, res) => {
	res.send("hello word")
})

const pool = require('../database/database');

module.exports = router;