import { combineReducers } from 'redux';
import currentWeather from './currentWeather.reducer';

export default combineReducers({
    currentWeather,
});