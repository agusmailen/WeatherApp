const initialState = { currentWeather: {}, error: null };

const currentWeatherReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case 'SET_CURRENT_WEATHER':
            return Object.assign({}, state, {
                currentWeather: payload,
                error: null
            })
        case 'SET_WEATHER_FAILED':
            return Object.assign({}, state, {
                error: payload
            })
        default:
            return state;    
    }
}

export default currentWeatherReducer;