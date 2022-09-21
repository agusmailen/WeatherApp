import axios from 'axios';

export const getCurrentWeather = (payload) => {

    return (dispatch) => {
          
        axios.get(`http://localhost:3001/weather/getCurrentWeather/${payload}`)
        .then((response) => {
            if(response.data.status != 200) {
                dispatch({ type: 'SET_WEATHER_FAILED', payload: response.data.message})
            } else {
                dispatch({ type: 'SET_CURRENT_WEATHER', payload:response })
            }  
        })
        .catch((error) => {
            dispatch({ type: 'SET_WEATHER_FAILED', payload: error})
        })
    }
}