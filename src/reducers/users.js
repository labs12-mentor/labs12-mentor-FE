import {
    REGISTER_USER_START,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE
} from '../constants/actionTypes';

const initialState = {
    token: localStorage.getItem('token'),
    creatingUser: false,
    newUser: null,
    error: null
}

export default (state=initialState, action) => {
    switch(action.type) {
        case REGISTER_USER_START:
            return {
                ...state,
                creatingUser: true
            }

        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                creatingUser: false,
                newUser: action.payload
            }

        case REGISTER_USER_FAILURE:
            return {
                ...state,
                creatingUser: false,
                error: action.payload
            }

        default:
            return state;
    }
}