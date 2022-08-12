const { config } = require('../config/config');
const axios = require('axios').default;

class WeatherService {

    getCurrent = async (city) => {
        const url =  `${config.urlBase}&appid=${config.api}&q=${city}`
        const weather = await axios.get(url);
        return weather.data;
    };
};

module.exports = WeatherService;