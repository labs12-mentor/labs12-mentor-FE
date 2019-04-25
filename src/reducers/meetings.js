import {
    GET_MEETINGS_START,
    GET_MEETINGS_SUCCESS,
    GET_MEETINGS_FAILURE,
    CREATE_MEETING_START,
    CREATE_MEETING_SUCCESS,
    CREATE_MEETING_FAILURE,
    UPDATE_MEETING_START,
    UPDATE_MEETING_SUCCESS,
    UPDATE_MEETING_FAILURE,
    DELETE_MEETING_START,
    DELETE_MEETING_SUCCESS,
    DELETE_MEETING_FAILURE
} from "../constants/actionTypes.js"


const initialState = {
    error: null,
    meetingsList: [],
    gettingMeetings: false,
    creatingMeetings: false,
    deletingMeetings: false,
    updatingMeetings: false
}

const meetingsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_MEETINGS_START:
            return {
                ...state,
                gettingMeetings: true,
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
                gettingMeetings:false,
                error: action.payload
            }
    }
}

export default meetingsReducer;