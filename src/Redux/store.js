import { createStore } from 'redux';
import userReducer from './UserInfo/userReducer'
const store = createStore(userReducer)

export default store;