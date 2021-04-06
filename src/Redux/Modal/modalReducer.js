const initialState = {
    signup: false,
    login: false,
    emoji: false
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
        case 'EMOJI': return {
            ...state,
            emoji: action.payload
        }
        default: return state;
    }
}

export default userReducer