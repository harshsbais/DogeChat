const initialState = {
    userName: '',
    userId: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_NAME': return {
            ...state,
            userName: action.payload
        }
        case 'USER_ID': return {
            ...state,
            userId: action.payload
        }
        default: return state;
    }
}

export default userReducer