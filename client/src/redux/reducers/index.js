import { combineReducers } from 'redux';
import Weather from './Weather.reducer';
import User from './User.reducer';

export default combineReducers({
    Weather,
    User
});