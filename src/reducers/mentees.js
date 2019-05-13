import {
    GET_MENTEES_START,
    GET_MENTEES_SUCCESS,
    GET_MENTEES_FAILURE,
    GET_SPECIFIC_MENTEE_START,
    GET_SPECIFIC_MENTEE_SUCCESS,
    GET_SPECIFIC_MENTEE_FAILURE,
    CREATE_MENTEE_START,
    CREATE_MENTEE_SUCCESS,
    CREATE_MENTEE_FAILURE,
    UPDATE_MENTEE_START,
    UPDATE_MENTEE_SUCCESS,
    UPDATE_MENTEE_FAILURE,
    DELETE_MENTEE_START,
    DELETE_MENTEE_SUCCESS,
    DELETE_MENTEE_FAILURE,
    REMOVE_MENTEE_START,
    REMOVE_MENTEE_SUCCESS,
    REMOVE_MENTEE_FAILURE
} from '../constants/actionTypes';

const initialState = {
    mentees: [],
    isFetching: false,
    currentMentee: null,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_MENTEES_START:
            return {
                ...state,
                isFetching: true
            };

        case GET_MENTEES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                mentees: action.payload.sort((a, b) => {
                    if (a.id < b.id) return -1;
                    if (a.id > b.id) return 1;
                    return 0;
                })
            };

        case GET_MENTEES_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case GET_SPECIFIC_MENTEE_START:
            return {
                ...state,
                isFetching: true
            };

        case GET_SPECIFIC_MENTEE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                currentMentee: action.payload
            };

        case GET_SPECIFIC_MENTEE_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case CREATE_MENTEE_START:
            return {
                ...state,
                isFetching: true
            };

        case CREATE_MENTEE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                mentees: [...state.mentees, action.payload]
            };

        case CREATE_MENTEE_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case UPDATE_MENTEE_START:
            return {
                ...state,
                isFetching: true
            };

        case UPDATE_MENTEE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                mentees: [
                    ...state.mentees.filter((elem) => elem.id !== action.payload.id),
                    action.payload
                ].sort((a, b) => {
                    if (a.id < b.id) return -1;
                    if (a.id > b.id) return 1;
                    return 0;
                })
            };

        case UPDATE_MENTEE_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case DELETE_MENTEE_START:
            return {
                ...state,
                isFetching: true
            };

        case DELETE_MENTEE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                mentees: state.mentees.filter((elem) => elem.id !== action.payload)
            };

        case DELETE_MENTEE_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case REMOVE_MENTEE_START:
            return {
                ...state,
                isFetching: true
            };

        case REMOVE_MENTEE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                mentees: state.mentees.filter((elem) => elem.id !== action.payload)
            };

        case REMOVE_MENTEE_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        default:
            return state;
    }
};
