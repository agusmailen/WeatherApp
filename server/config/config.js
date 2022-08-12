require('dotenv').config();

const config = {
	host: process.env.HOST,
	port: process.env.PORT || 8080,
	key: process.env.KEY,
	api: process.env.APIKEY,
	urlBase: 'https://api.openweathermap.org/data/2.5/weather?&lang=es'
}

module.exports = { config };