import { combineReducers } from 'redux';
import blogs from './blogs';
import userReducer from './auth';
import modal from './modal';

export default combineReducers({
    blogs,
    userReducer,
    modal,
});