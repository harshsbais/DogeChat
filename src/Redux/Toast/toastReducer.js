const initialState = {
    open: false,
    color: '',
    data: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOAST_OPEN': return {
            ...state,
            open: action.payload
        }
        case 'TOAST_DATA': return {
            ...state,
            data: action.payload
        }
        case 'TOAST_COLOR': return {
            ...state,
            color: action.payload
        }
        default: return state;
    }
}

export default userReducer