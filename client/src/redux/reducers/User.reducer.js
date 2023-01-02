const initialState = { user: {}, error: null, register: null};

const userReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case 'CONFIRM_USER_REGISTER':
            return Object.assign({}, state, {
                error: null,
                register: payload
            })
        case 'FAILED_USER_REQUEST':
            return Object.assign({}, state, {
                error: payload,
                user: {}
            })
        case 'CONFIRM_USER_LOGIN':
            return Object.assign({}, state, {
                user: payload,
                error: null
            })
        case 'ROLLBACK':
            return {...state, initialState}
        default:
            return state;
    }
}

export default userReducer;