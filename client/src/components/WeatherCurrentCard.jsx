import React from "react";
import '../assets/styles/WeatherCarts.scss'

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
                <p className='temperature-max-min'>Temp. Min: {Math.round(base.main.temp_min)} ºC</p>
                <span>-</span>
                <p className='temperature-max-min'>Temp. Max: {Math.round(base.main.temp_max)} ºC</p>
            </div>
        </div>
    )
};


export default CurrentCart;