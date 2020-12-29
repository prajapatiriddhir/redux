import { authConstants } from '../constant/auth.constant'

import {status} from '../constant/commonDS'

/* const initialState = {
    user: null,
    user_request: false,
    user_error: null,
} */


let initialState = {
    user:null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case authConstants.REGISTER_REQUEST_ACTION:
            return {
                ...state,
                user_register_status:status.REQUEST,
                user:action.data
            }
        case authConstants.REGISTER_SUCCESS_ACTION:
            return {
                ...state,
                user_register_status:status.SUCCESS,
                user:action.data
            }
        case authConstants.REGISTER_ERROR_ACTION:
            return {
                ...state,
                user_register_status:status.ERROR,
                user:null
              
            }
        case authConstants.LOGIN_REQUEST_ACTION:
            return {
                ...state,
                user_login_status:status.REQUEST,
                user:action.data
            }
        case authConstants.LOGIN_SUCCESS_ACTION:
            return {
                ...state,
                user_login_status:status.SUCCESS,
                user:action.data
            }
        case authConstants.LOGIN_ERROE_ACTION:
            return {
                ...state,
               user_login_status:status.ERROR,
               user:null
            }
        case authConstants.LOGOUT:
            return {
                ...state,
                user: null,
            }
        default:
            return {...state }
    }
}