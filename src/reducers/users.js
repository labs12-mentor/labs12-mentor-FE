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
    fetchingUsers: false,
    fetchingSpecificUser: false,
    users: [],
    specificUser: null,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_USERS_START:
            return {
                fetchingUsers: true
            }

        case GET_USERS_SUCCESS:
            return {
                fetchingUsers: false,
                users: action.payload
            }

        case GET_USERS_FAILURE:
            return {
                fetchingUsers: false,
                error: action.payload
            }

        case GET_SPECIFIC_USER_START:
            return {
                fetchingSpecificUser: true
            }

        case GET_SPECIFIC_USER_SUCCESS:
            return {
                fetchingSpecificUser: false,
                specificUser: action.payload
            }

        case GET_SPECIFIC_USER_FAILURE:
            return {
                fetchingSpecificUser: false,
                error: action.payload
            }

        default: {
            return state;
        }
    }
}