import {
    GET_MENTORS_START,
    GET_MENTORS_SUCCESS,
    GET_MENTORS_FAILURE,
    GET_SPECIFIC_MENTOR_START,
    GET_SPECIFIC_MENTOR_SUCCESS,
    GET_SPECIFIC_MENTOR_FAILURE,
    CREATE_MENTOR_START,
    CREATE_MENTOR_SUCCESS,
    CREATE_MENTOR_FAILURE,
    UPDATE_MENTOR_START,
    UPDATE_MENTOR_SUCCESS,
    UPDATE_MENTOR_FAILURE,
    DELETE_MENTOR_START,
    DELETE_MENTOR_SUCCESS,
    DELETE_MENTOR_FAILURE,
    REMOVE_MENTOR_START,
    REMOVE_MENTOR_SUCCESS,
    REMOVE_MENTOR_FAILURE
} from '../constants/actionTypes';

const initialState = {
    mentors: [],
    isFetching: false,
    currentMentor: null,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_MENTORS_START:
            return {
                ...state,
                isFetching: true
            };

        case GET_MENTORS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                mentors: action.payload.sort((a, b) => {
                    if (a.id < b.id) return -1;
                    if (a.id > b.id) return 1;
                    return 0;
                })
            };

        case GET_MENTORS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case GET_SPECIFIC_MENTOR_START:
            return {
                ...state,
                isFetching: true
            };

        case GET_SPECIFIC_MENTOR_SUCCESS:
            return {
                ...state,
                isFetching: false,
                currentMentor: action.payload
            };

        case GET_SPECIFIC_MENTOR_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case CREATE_MENTOR_START:
            return {
                ...state,
                isFetching: true
            };

        case CREATE_MENTOR_SUCCESS:
            return {
                ...state,
                isFetching: false,
                mentors: [...state.mentors, action.payload]
            };

        case CREATE_MENTOR_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case UPDATE_MENTOR_START:
            return {
                ...state,
                isFetching: true
            };

        case UPDATE_MENTOR_SUCCESS:
            return {
                ...state,
                isFetching: false,
                mentors: [...state.mentors.filter(elem => elem.id !== action.payload.id), action.payload].sort((a, b) => {
                    if (a.id < b.id) return -1;
                    if (a.id > b.id) return 1;
                    return 0;
                })
            };

        case UPDATE_MENTOR_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case DELETE_MENTOR_START:
            return {
                ...state,
                isFetching: true
            };

        case DELETE_MENTOR_SUCCESS:
            return {
                ...state,
                isFetching: false,
                mentors: state.mentors.filter(elem => elem.id !== action.payload)
            };

        case DELETE_MENTOR_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case REMOVE_MENTOR_START:
            return {
                ...state,
                isFetching: true
            };

        case REMOVE_MENTOR_SUCCESS:
            return {
                ...state,
                isFetching: false,
                mentors: state.mentors.filter(elem => elem.id !== action.payload)
            };

        case REMOVE_MENTOR_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        default:
            return state;
    }
};
