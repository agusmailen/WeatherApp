require('dotenv').config();

const config = {
	host: process.env.HOST,
	port: process.env.PORT || 8080,
	key: process.env.KEY,
}

module.exports = { config };