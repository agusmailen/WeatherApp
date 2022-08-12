const router = require('express').Router();

const WeatherController = require('../controllers/Weather.controller');
const Weather = new WeatherController();

router.get('/getCurrentWeather/:city', Weather.getCurrentWeather.bind(Weather));

module.exports = router;