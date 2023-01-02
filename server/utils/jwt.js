const jwt = require('jsonwebtoken');
const config = require('../config/config').config;

module.exports = {
	token: (data) => jwt.sign({data}, config.key, { expiresIn: '9999 years' }),
	decoded: (token) => jwt.verify(token, config.key, (err, decoded) => {
		return err? err : decoded;
	})
};