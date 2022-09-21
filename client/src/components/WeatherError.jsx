import React from "react";
import '../assets/styles/WeatherError.scss';

const  ErrorCard = ({data}) => {
    return (
        <div className="message-error-container">
            <h1>{data}</h1>
        </div>
    )
}

export default ErrorCard;