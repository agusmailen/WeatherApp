const initialState = { currentWeather: {}, error: null };

const currentWeatherReducer = (state = initialState, action) => {
    const { type, payload, error } = action;
    switch(type) {
        case 'SET_CURRENT_WEATHER':
            return{...state, currentWeather: payload};
        default:
            return {...state};
            
    }
}

export default currentWeatherReducer;