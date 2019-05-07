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
    
}

export default (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}