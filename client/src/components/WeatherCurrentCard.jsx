import React from "react";
import '../assets/styles/WeatherCarts.scss'
import windIcon from '../assets/static/wind_icon-icons.com_65118.png'
import humidityIcon from '../assets/static/moisture_4668.png'
const CurrentCart = ({data}) => {

    const base = data.data.response;
    const iconCode = base.weather[0].icon;
 
    return (
        <div className="cart-container">
            <h2 className='country-value'>{base.name}, {base.sys.country}</h2>
            <h2 className='temperature-value'>{Math.round(base.main.temp)} ºC</h2> 
            <img src={`http://openweathermap.org/img/wn/${iconCode}.png`} alt="" />
            <h2>{base.weather[0].description[0].toUpperCase() + base.weather[0].description.slice(1).toLowerCase()}</h2>
            <div className="temperatures-container">
                <p>Sensación Térmica: {Math.round(base.main.feels_like) } ºC</p>
                <p className='temperature-max-min'>Min: {Math.round(base.main.temp_min)} ºC</p>
                <span>-</span>
                <p className='temperature-max-min'>Max: {Math.round(base.main.temp_max)} ºC</p>
            </div>
            <div className="wind_and_humidity-icons">
                <div className="humidety-container-data">
                    <img src={humidityIcon}></img>
                    <p>{base.main.humidity}%</p>
                </div>
                <div className="wins-container-data">
                    <img src={windIcon}></img>
                    <p>{Math.round(base.wind.speed)*3.6}km/h</p>
                </div>
            </div>
        </div>
    )
};


export default CurrentCart;