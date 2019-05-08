import {
    GET_INVITATIONS_START,
    GET_INVITATIONS_SUCCESS,
    GET_INVITATIONS_FAILURE,
    GET_SPECIFIC_INVITATION_START,
    GET_SPECIFIC_INVITATION_SUCCESS,
    GET_SPECIFIC_INVITATION_FAILURE,
    CREATE_INVITATION_START,
    CREATE_INVITATION_SUCCESS,
    CREATE_INVITATION_FAILURE,
    DELETE_INVITATION_START,
    DELETE_INVITATION_SUCCESS,
    DELETE_INVITATION_FAILURE,
    REMOVE_INVITATION_START,
    REMOVE_INVITATION_SUCCESS,
    REMOVE_INVITATION_FAILURE
} from '../constants/actionTypes';

const initialState = {
    invitations: [],
    isFetching: false,
    currentInvitation: null,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_INVITATIONS_START:
            return {
                ...state,
                isFetching: true
            }
        
        case GET_INVITATIONS_SUCCESS:
            return {
                ...state,
                invitations: action.payload,
                isFetching: false
            }

        case GET_INVITATIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }

        case GET_SPECIFIC_INVITATION_START:
            return {
                ...state,
                isFetching: true
            }
        
        case GET_SPECIFIC_INVITATION_SUCCESS:
            return {
                ...state,
                currentInvitation: action.payload,
                isFetching: false
            }

        case GET_SPECIFIC_INVITATION_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }

        case CREATE_INVITATION_START:
            return {
                ...state,
                isFetching: true
            }
        
        case CREATE_INVITATION_SUCCESS:
            return {
                ...state,
                isFetching: false
            }

        case CREATE_INVITATION_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }

        case DELETE_INVITATION_START:
            return {
                ...state,
                isFetching: true
            }
        
        case DELETE_INVITATION_SUCCESS:
            return {
                ...state,
                isFetching: false
            }

        case DELETE_INVITATION_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }

        case REMOVE_INVITATION_START:
            return {
                ...state,
                isFetching: true
            }
        
        case REMOVE_INVITATION_SUCCESS:
            return {
                ...state,
                isFetching: false
            }

        case REMOVE_INVITATION_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }

        default:
            return state;
    }
}