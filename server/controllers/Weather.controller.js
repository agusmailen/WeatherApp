const WeatherService = require('../services/Weather.service');
const Weather = new WeatherService();

class WeatherController {

    async getCurrentWeather(req, res) {
		const data = req.params.city;
        Weather.getCurrent(data)
        .then((response) => {
			if (!response) return res.json({
				status: 430,
				message: 'Ocurrió un error al realizar la consulta'
			});
			return res.json({
				status: 200,
				response
			})
		})
        .catch(err => {
			return res.json ({ status: 400, error: err.message, message: 'Ups..Ocurrió un error... Puede que la ciudad ingresada no sea válida'});
		});
    };
    
};

module.exports = WeatherController;