import {
    CREATE_USER_START,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILURE
} from '../constants/actionTypes';

const initialState = {
    token: localStorage.getItem('token'),
    creatingUser: false,
    newUser: null,
    error: null
}

export default (state=initialState, action) => {
    switch(action.type) {
        case CREATE_USER_START:
            return {
                ...state,
                creatingUser: true
            }

        case CREATE_USER_SUCCESS:
            return {
                ...state,
                creatingUser: false,
                newUser: action.payload
            }

        case CREATE_USER_FAILURE:
            return {
                ...state,
                creatingUser: false,
                error: action.payload
            }

        default:
            return state;
    }
}