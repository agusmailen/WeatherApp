const jwt = require('jsonwebtoken');
const config = require('../config/config').config;

module.exports = {
	token: (data) => jwt.sign({data}, config.key, { expiresIn: '2days' }),
	decoded: (token) => jwt.verify(token, config.key, (err, decoded) => {
		return err? err : decoded;
	})
};