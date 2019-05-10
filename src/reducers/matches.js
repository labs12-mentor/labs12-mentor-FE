import {
    GET_MATCHES_START,
    GET_MATCHES_SUCCESS,
    GET_MATCHES_FAILURE,
    GET_SPECIFIC_MATCH_START,
    GET_SPECIFIC_MATCH_SUCCESS,
    GET_SPECIFIC_MATCH_FAILURE,
    CREATE_MATCH_START,
    CREATE_MATCH_SUCCESS,
    CREATE_MATCH_FAILURE,
    UPDATE_MATCH_START,
    UPDATE_MATCH_SUCCESS,
    UPDATE_MATCH_FAILURE,
    DELETE_MATCH_START,
    DELETE_MATCH_SUCCESS,
    DELETE_MATCH_FAILURE,
    REMOVE_MATCH_START,
    REMOVE_MATCH_SUCCESS,
    REMOVE_MATCH_FAILURE
} from '../constants/actionTypes';

const initialState = {
    matches: [],
    isFetching: false,
    currentMatch: null,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_MATCHES_START:
            return {
                ...state,
                isFetching: true
            };

        case GET_MATCHES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                matches: action.payload.sort((a, b) => {
                    if (a.id < b.id) return -1;
                    if (a.id > b.id) return 1;
                    return 0;
                })
            };

        case GET_MATCHES_FAILURE:
            return {
                ...state,
                error: action.payload
            };

        case GET_SPECIFIC_MATCH_START:
            return {
                ...state,
                isFetching: true
            };

        case GET_SPECIFIC_MATCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                currentMatch: action.payload
            };

        case GET_SPECIFIC_MATCH_FAILURE:
            return {
                ...state,
                error: action.payload
            };

        case CREATE_MATCH_START:
            return {
                ...state,
                isFetching: true
            };

        case CREATE_MATCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                matches: [...state.matches, action.payload]
            };

        case CREATE_MATCH_FAILURE:
            return {
                ...state,
                error: action.payload
            };

        case UPDATE_MATCH_START:
            return {
                ...state,
                isFetching: true
            };

        case UPDATE_MATCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                matches: [
                    ...state.matches.filter((elem) => elem.id !== action.payload.id),
                    action.payload
                ].sort((a, b) => {
                    if (a.id < b.id) return -1;
                    if (a.id > b.id) return 1;
                    return 0;
                })
            };

        case UPDATE_MATCH_FAILURE:
            return {
                ...state,
                error: action.payload
            };

        case DELETE_MATCH_START:
            return {
                ...state,
                isFetching: true
            };

        case DELETE_MATCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                matches: state.matches.filter((elem) => elem.id !== action.payload)
            };

        case DELETE_MATCH_FAILURE:
            return {
                ...state,
                error: action.payload
            };

        case REMOVE_MATCH_START:
            return {
                ...state,
                isFetching: true
            };

        case REMOVE_MATCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                matches: state.matches.filter((elem) => elem.id !== action.payload)
            };

        case REMOVE_MATCH_FAILURE:
            return {
                ...state,
                error: action.payload
            };

        default:
            return state;
    }
};
