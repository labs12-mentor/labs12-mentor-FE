import {
    REGISTER_USER_START,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
    LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    GET_STUDENT_INFO_START,
    GET_STUDENT_INFO_SUCCESS,
    GET_STUDENT_INFO_FAILURE
} from '../constants/actionTypes';

const initialState = {
    token: localStorage.getItem('token'),
    registeringUser: false,
    newUser: null,
    loggingInUser: false,
    currentUser: false,
    error: null
}

export default (state=initialState, action) => {
    switch(action.type) {
        case REGISTER_USER_START:
            return {
                ...state,
                registeringUser: true
            }

        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                registeringUser: false,
                newUser: action.payload
            }

        case REGISTER_USER_FAILURE:
            return {
                ...state,
                registeringUser: false,
                error: action.payload
            }

        case LOGIN_USER_START:
            return {
                ...state,
                loggingInUser: true
            }

        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                loggingInUser: false,
                currentUser: action.payload
            }

        case LOGIN_USER_FAILURE:
            return {
                ...state,
                loggingInUser: false,
                error: action.payload
            }


        default:
            return state;
    }
}