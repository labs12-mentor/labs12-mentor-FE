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
    
}

export default (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}