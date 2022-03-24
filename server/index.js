const express = require('express')
const app = express()
const { config } = require('./config/config');

//Routes
app.use('/', require('./routes'));

app.listen((config.port), () => {
	console.log(`Server running on ${config.host}:${config.port}`)
});