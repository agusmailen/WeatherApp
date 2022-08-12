const initialState = { currentWeather: {}, error: null };

const currentWeatherReducer = (state = initialState, action) => {
    const { type, payload, error } = action;
    switch(type) {
        case 'SET_CURRENT_WEATHER':
            console.log(payload)
            const newCurrentWeather = {...payload};
            return{...state, currentWeather: newCurrentWeather};
        default:
            return {...state};
            
    }
}

export default currentWeatherReducer;