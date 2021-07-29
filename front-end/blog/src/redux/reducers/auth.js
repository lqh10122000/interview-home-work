import {INIT_STATE} from '../../constant';
import { getType, login, register } from '../actions';

export default function userReducer(state = INIT_STATE.users , action)
{
    switch (action.type) {
        case getType(login.loginRequest):
            return {
                ...state,
                isLoading: true,
                msg : action.payload,
            }
            break;
        case getType(login.loginSuccess):
            return {
                ...state,
                isLoading: false,
                msg : action.payload,
            };
            break;
        case getType(login.loginFailure):
            return {
                ...state,
                isLoading: false,
                msg : action.payload,
            }
            break;
        case getType(register.registerRequest):
            return {
                ...state,
                isLoading: true,
            }
            break;
        case getType(register.registerSuccess):
            return {
                ...state,
                isLoading: false,
                msg: action.payload,
            };
            break;
        case getType(register.registerFailure):
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
            break;
        default:
            return state;
            break;
    }
}