import { combineReducers } from 'redux';
import userReducer from './UserInfo/userReducer'
import toastReducer from './Toast/toastReducer'
import modalReducer from './Modal/modalReducer'

const rootReducer = combineReducers({
    user: userReducer,
    toast: toastReducer,
    modal: modalReducer
})

export default rootReducer