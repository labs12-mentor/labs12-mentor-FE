import {
    GET_USERS_START,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
    GET_SPECIFIC_USER_START,
    GET_SPECIFIC_USER_SUCCESS,
    GET_SPECIFIC_USER_FAILURE,
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
    users: [],
    isFetching: false,
    currentUser: null,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_START:
            return {
                ...state,
                isFetching: true
            };

        case GET_USERS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                users: action.payload.sort((a, b) => {
                    if (a.id < b.id) return -1;
                    if (a.id > b.id) return 1;
                    return 0;
                })
            };

        case GET_USERS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case GET_SPECIFIC_USER_START:
            return {
                ...state,
                isFetching: true
            };

        case GET_SPECIFIC_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                currentUser: action.payload
            };

        case GET_SPECIFIC_USER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case UPDATE_USER_START:
            return {
                ...state,
                isFetching: true
            };

        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                users: [
                    ...state.users.filter((elem) => elem.id !== action.payload.id),
                    action.payload
                ].sort((a, b) => {
                    if (a.id < b.id) return -1;
                    if (a.id > b.id) return 1;
                    return 0;
                })
            };

        case UPDATE_USER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case DELETE_USER_START:
            return {
                ...state,
                isFetching: true
            };

        case DELETE_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                users: state.users.filter((elem) => elem.id !== action.payload)
            };

        case DELETE_USER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case REMOVE_USER_START:
            return {
                ...state,
                isFetching: true
            };

        case REMOVE_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                users: state.users.filter((elem) => elem.id !== action.payload)
            };

        case REMOVE_USER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        default:
            return state;
    }
};
