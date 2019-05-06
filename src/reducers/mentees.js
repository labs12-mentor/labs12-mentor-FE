import {
    GET_MENTEE_PROFILES_START,
    GET_MENTEE_PROFILES_SUCCESS,
    GET_MENTEE_PROFILES_FAILURE
} from '../constants/actionTypes';

const initialState = {
    fetchingMentees: false,
    mentees: [],
    error: null
}

const menteesReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_MENTEE_PROFILES_START:
            return {
                ...state,
                fetchingMentees: true
            };

        case GET_MENTEE_PROFILES_SUCCESS:
            return {
                ...state,
                fetchingMentees: false,
                mentees: action.payload
            };

        case GET_MENTEE_PROFILES_FAILURE:
            return {
                ...state,
                fetchingMentees: false,
                error: action.payload
            };
        
        default:
            return {
                ...state
            }
    }
}

export default menteesReducer;