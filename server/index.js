const express = require('express')
const app = express()
const { config } = require('./config/config');
const cors = require('cors');


app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 
app.use(cors());

//Routes
app.use('/', require('./routes'));

app.listen((config.port), () => {
	console.log(`Server running on ${config.host}:${config.port}`)
});