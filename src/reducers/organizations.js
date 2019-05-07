import {
    GET_ORGANIZATIONS_START,
    GET_ORGANIZATIONS_SUCCESS,
    GET_ORGANIZATIONS_FAILURE,
    GET_SPECIFIC_ORGANIZATION_START,
    GET_SPECIFIC_ORGANIZATION_SUCCESS,
    GET_SPECIFIC_ORGANIZATION_FAILURE,
    UPDATE_ORGANIZATION_START,
    UPDATE_ORGANIZATION_SUCCESS,
    UPDATE_ORGANIZATION_FAILURE,
    DELETE_ORGANIZATION_START,
    DELETE_ORGANIZATION_SUCCESS,
    DELETE_ORGANIZATION_FAILURE,
    REMOVE_ORGANIZATION_START,
    REMOVE_ORGANIZATION_SUCCESS,
    REMOVE_ORGANIZATION_FAILURE
} from '../constants/actionTypes';

const initialState = {
    organization: null,
    creatingOrg: false,
    isFetching: false,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_ORGANIZATION_START:
            return {
                ...state,
                isFetching: true
            };

        case GET_ORGANIZATION_SUCCESS:
            return {
                ...state,
                organization: action.payload,
                isFetching: false
            };

        case GET_ORGANIZATION_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            };

        case CREATE_ORGANIZATION_START:
            return {
                ...state,
                creatingOrg: true
            };

        case CREATE_ORGANIZATION_SUCCESS:
            return {
                ...state,
                organization: action.payload,
                creatingOrg: false
            };

        case CREATE_ORGANIZATION_FAILURE:
            return {
                ...state,
                error: action.payload,
                creatingOrg: false
            };

        case UPDATE_ORGANIZATION_START:
            return {
                ...state,
            };

        case UPDATE_ORGANIZATION_SUCCESS:
            return {
                ...state,
                organization: action.payload
            };

        case UPDATE_ORGANIZATION_FAILURE:
            return {
                ...state,
                error: action.payload
            };

        case DELETE_ORGANIZATION_START:
            return {
                ...state,
            };

        case DELETE_ORGANIZATION_SUCCESS:
            return {
                ...state,
                organization: action.payload
            };

        case DELETE_ORGANIZATION_FAILURE:
            return {
                ...state,
                error: action.payload
            };

        default: {
            return state;
        }
    }
}