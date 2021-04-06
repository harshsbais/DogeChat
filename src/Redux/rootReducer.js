import { combineReducers } from 'redux';
import userReducer from './UserInfo/userReducer'
import toastReducer from './Toast/toastReducer'

const rootReducer = combineReducers({
    user: userReducer,
    toast: toastReducer
})

export default rootReducer