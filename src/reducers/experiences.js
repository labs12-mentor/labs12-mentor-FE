import {
    GET_EXPERIENCES_START,
    GET_EXPERIENCES_SUCCESS,
    GET_EXPERIENCES_FAILURE,
    GET_SPECIFIC_EXPERIENCE_START,
    GET_SPECIFIC_EXPERIENCE_SUCCESS,
    GET_SPECIFIC_EXPERIENCE_FAILURE,
    CREATE_EXPERIENCE_START,
    CREATE_EXPERIENCE_SUCCESS,
    CREATE_EXPERIENCE_FAILURE,
    UPDATE_EXPERIENCE_START,
    UPDATE_EXPERIENCE_SUCCESS,
    UPDATE_EXPERIENCE_FAILURE,
    DELETE_EXPERIENCE_START,
    DELETE_EXPERIENCE_SUCCESS,
    DELETE_EXPERIENCE_FAILURE,
    REMOVE_EXPERIENCE_START,
    REMOVE_EXPERIENCE_SUCCESS,
    REMOVE_EXPERIENCE_FAILURE
} from '../constants/actionTypes';

const initialState = {
    experiences: [],
    isFetching: false,
    currentExperience: null,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_EXPERIENCES_START:
            return {
                ...state,
                isFetching: true
            };

        case GET_EXPERIENCES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                experiences: action.payload.sort((a, b) => {
                    if (a.id < b.id) return -1;
                    if (a.id > b.id) return 1;
                    return 0;
                })
            };

        case GET_EXPERIENCES_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case GET_SPECIFIC_EXPERIENCE_START:
            return {
                ...state,
                isFetching: true
            };

        case GET_SPECIFIC_EXPERIENCE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                currentExperience: action.payload
            };

        case GET_SPECIFIC_EXPERIENCE_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case CREATE_EXPERIENCE_START:
            return {
                ...state,
                isFetching: true
            };

        case CREATE_EXPERIENCE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                experiences: [...state.experiences, action.payload]
            };

        case CREATE_EXPERIENCE_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case UPDATE_EXPERIENCE_START:
            return {
                ...state,
                isFetching: true
            };

        case UPDATE_EXPERIENCE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                experiences: [...state.experiences.filter(elem => elem.id !== action.payload.id), action.payload].sort((a, b) => {
                    if (a.id < b.id) return -1;
                    if (a.id > b.id) return 1;
                    return 0;
                })
            };

        case UPDATE_EXPERIENCE_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case DELETE_EXPERIENCE_START:
            return {
                ...state,
                isFetching: true
            };

        case DELETE_EXPERIENCE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                experiences: state.experiences.filter(elem => elem.id !== action.payload)
            };

        case DELETE_EXPERIENCE_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        
        case REMOVE_EXPERIENCE_START:
            return {
                ...state,
                isFetching: true
            };

        case REMOVE_EXPERIENCE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                experiences: state.experiences.filter(elem => elem.id !== action.payload)
            };

        case REMOVE_EXPERIENCE_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
            
        default: {
            return state;
        }
    }
}