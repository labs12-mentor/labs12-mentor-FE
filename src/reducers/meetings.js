import {
    GET_MEETINGS_START,
    GET_MEETINGS_SUCCESS,
    GET_MEETINGS_FAILURE,
    GET_SPECIFIC_MEETING_START,
    GET_SPECIFIC_MEETING_SUCCESS,
    GET_SPECIFIC_MEETING_FAILURE,
    CREATE_MEETING_START,
    CREATE_MEETING_SUCCESS,
    CREATE_MEETING_FAILURE,
    UPDATE_MEETING_START,
    UPDATE_MEETING_SUCCESS,
    UPDATE_MEETING_FAILURE,
    DELETE_MEETING_START,
    DELETE_MEETING_SUCCESS,
    DELETE_MEETING_FAILURE,
    REMOVE_MEETING_START,
    REMOVE_MEETING_SUCCESS,
    REMOVE_MEETING_FAILURE
} from '../constants/actionTypes';

const initialState = {
    meetings: [],
    isFetching: false,
    currentMeeting: null,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_MEETINGS_START:
            return {
                ...state,
                isFetching: true
            };

        case GET_MEETINGS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                meetings: action.payload.sort((a, b) => {
                    if (a.id < b.id) return -1;
                    if (a.id > b.id) return 1;
                    return 0;
                })
            };

        case GET_MEETINGS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case GET_SPECIFIC_MEETING_START:
            return {
                ...state,
                isFetching: true
            };

        case GET_SPECIFIC_MEETING_SUCCESS:
            return {
                ...state,
                isFetching: false,
                currentMeeting: action.payload
            };

        case GET_SPECIFIC_MEETING_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case CREATE_MEETING_START:
            return {
                ...state,
                isFetching: true
            };

        case CREATE_MEETING_SUCCESS:
            return {
                ...state,
                isFetching: false,
                meetings: [...state.meetings, action.payload]
            };

        case CREATE_MEETING_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case UPDATE_MEETING_START:
            return {
                ...state,
                isFetching: true
            };

        case UPDATE_MEETING_SUCCESS:
            return {
                ...state,
                isFetching: false,
                meetings: [
                    ...state.meetings.filter((elem) => elem.id !== action.payload.id),
                    action.payload
                ].sort((a, b) => {
                    if (a.id < b.id) return -1;
                    if (a.id > b.id) return 1;
                    return 0;
                })
            };

        case UPDATE_MEETING_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case DELETE_MEETING_START:
            return {
                ...state,
                isFetching: true
            };

        case DELETE_MEETING_SUCCESS:
            return {
                ...state,
                isFetching: false,
                meetings: state.meetings.filter((elem) => elem.id !== action.payload)
            };

        case DELETE_MEETING_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case REMOVE_MEETING_START:
            return {
                ...state,
                isFetching: true
            };

        case REMOVE_MEETING_SUCCESS:
            return {
                ...state,
                isFetching: false,
                meetings: state.meetings.filter((elem) => elem.id !== action.payload)
            };

        case REMOVE_MEETING_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        default:
            return state;
    }
};
