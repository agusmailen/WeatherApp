const router = require('express').Router();

router.get('/createUser', (req, res) => {
	res.send("hello word")
})

module.exports = router;