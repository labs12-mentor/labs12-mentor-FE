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
import { AST_False } from 'terser';

const initialState = {
    fetchingMentees: false,
    fetchingMentee: false,
    mentees: [],
    mentee: null,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_MENTEES_START:
            return {
                fetchingMentees: true
            }

        case GET_MENTEES_SUCCESS:
            return {
                fetchingMentees: false,
                mentees: action.payload
            }

        case GET_MENTEES_FAILURE:
            return {
                fetchingMentees: false,
                error: action.payload
            }

        case GET_SPECIFIC_MENTEE_START:
            return {
                fetchingMentee: true
            }

        case GET_SPECIFIC_MENTEE_SUCCESS:
            return {
                fetchingMentee: false,
                mentee: action.payload
            }

        case GET_SPECIFIC_MENTEE_FAILURE:
            return {
                fetchingMentee: false,
                error: action.payload
            }

        default:
            return state;
    }
}
