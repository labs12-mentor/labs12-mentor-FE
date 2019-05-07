import {
    GET_USERS_START,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
    GET_SPECIFIC_USER_START,
    GET_SPECIFIC_USER_SUCCESS,
    GET_SPECIFIC_USER_FAILURE,
    GET_CURRENT_USER_START,
    GET_CURRENT_USER_SUCCESS,
    GET_CURRENT_USER_FAILURE,
    UPDATE_USER_START,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    DELETE_USER_START,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
    REMOVE_USER_START,
    REMOVE_USER_SUCCESS,
    REMOVE_USER_FAILURE
} from '../constants/actionTypes';

const initialState = {
    
}

export default (state = initialState, action) => {
    switch(action.type){
        default: {
            return state;
        }
    }
}