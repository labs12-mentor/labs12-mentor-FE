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
                gettingMeetings: true
            };

        case GET_MEETINGS_SUCCESS:
            return {
                ...state,
                gettingMeetings: false,
                meetingsList: action.payload
            };

        case GET_MEETINGS_FAILURE:
            return {
                ...state,
                gettingMeetings: false,
                error: action.payload
            };

        case GET_SPECIFIC_MEETING_START:
            return {
                ...state,
                gettingMeetings: true
            };

        case GET_SPECIFIC_MEETING_SUCCESS:
            return {
                ...state,
                gettingMeetings: false,
                meetingsList: action.payload
            };

        case GET_SPECIFIC_MEETING_FAILURE:
            return {
                ...state,
                gettingMeetings: false,
                error: action.payload
            };

        case CREATE_MEETING_START:
            return {
                ...state,
                creatingMeetings: true
            };

        case CREATE_MEETING_SUCCESS:
            return {
                ...state,
                createMeetings: false,
                meetingsList: [...state.meetingsList, action.payload]
            };

        case CREATE_MEETING_FAILURE:
            return {
                ...state,
                createMeetings: false,
                error: action.payload
            };

        case UPDATE_MEETING_START:
            return {
                ...state,
                updateMeetings: true
            };

        case UPDATE_MEETING_SUCCESS:
            return {
                ...state,
                updateMeetings: false,
                meetingsList: [...state.meetingsList, action.payload]
            };

        case UPDATE_MEETING_FAILURE:
            return {
                ...state,
                updateMeetings: false,
                error: action.payload
            };

        case DELETE_MEETING_START:
            return {
                ...state,
                deleteMeetings: true
            };

        case DELETE_MEETING_SUCCESS:
            return {
                ...state,
                deleteMeetings: false
            };

        case DELETE_MEETING_FAILURE:
            return {
                ...state,
                deleteMeetings: false,
                error: action.payload
            };

        case REMOVE_MEETING_START:
            return {
                ...state,
                deleteMeetings: true
            };

        case REMOVE_MEETING_SUCCESS:
            return {
                ...state,
                deleteMeetings: false
            };

        case REMOVE_MEETING_FAILURE:
            return {
                ...state,
                deleteMeetings: false,
                error: action.payload
            };

        default: {
            return state;
        }
    }
};
