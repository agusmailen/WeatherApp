import axios from 'axios';
import config from '../../config/config'

export const RegisterUser = (payload) => {
    return (dispatch) => {
        axios.post('http://localhost:3001/user/createUser', payload, {
            headers: {
                tokenKey: config.key,
            },
        })
        .then((response) => {
            if(response.data != 200 || response.data.status != 200) return dispatch({ type: 'FAILED_USER_REQUEST', payload: response});
            dispatch({ type: 'CONFIRM_USER_REGISTER', payload: response});
        })
        .catch((error) => {
            dispatch({ type: 'FAILED_USER_REQUEST', payload: error})
        })
    }
};

export const LoginUser = (payload) => {
    return (dispatch) => {
        axios.post('http://localhost:3001/user/loginUser', payload, {
            headers: {
                tokenKey: config.key,
            },
        })
        .then((response) => {
            if(response.status != 200 || response.data.status != 200) return dispatch({ type: 'FAILED_USER_REQUEST', payload: response});
            dispatch({ type: 'CONFIRM_USER_LOGIN', payload: response});
        })
        .catch((error) => {
            dispatch({ type: 'FAILED_USER_REQUEST', payload: error})
        })

    }
}
