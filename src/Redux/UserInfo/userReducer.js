const initialState = {
    userName: 'hello world',
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_INFO': return {
            ...state,
            userName: action.payload
        }
        default: return state;
    }
}

export default userReducer