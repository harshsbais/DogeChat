const initialState = {
    signup: false,
    login: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGNUP': return {
            ...state,
            signup: action.payload
        }
        case 'LOGIN': return {
            ...state,
            login: action.payload
        }
        default: return state;
    }
}

export default userReducer