import axios from 'axios';

export const getCurrentWeather = (payload) => {

    return (dispatch) => {
          
        axios.get(`http://localhost:3001/weather/getCurrentWeather/${payload}`)
        .then((response) => {
            dispatch({ type: 'SET_CURRENT_WEATHER', payload:response })
        })
        .catch((error) => {
            console.log(error);
        })
    }
}