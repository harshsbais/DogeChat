const initialState = {
    name: '',
    id: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_NAME': return {
            ...state,
            name: action.payload
        }
        case 'USER_ID': return {
            ...state,
            id: action.payload
        }
        default: return state;
    }
}

export default userReducer