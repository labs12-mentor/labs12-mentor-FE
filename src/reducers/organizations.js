import {
    GET_ORGANIZATION_FAILURE,
    GET_ORGANIZATION_SUCCESS,
    GET_ORGANIZATION_FAILURE,
    CREATE_ORGANIZATION_START,
    CREATE_ORGANIZATION_SUCCESS,
    CREATE_ORGANIZATION_FAILURE,
    UPDATE_ORGANIZATION_START,
    UPDATE_ORGANIZATION_SUCCESS,
    UPDATE_ORGANIZATION_FAILURE,
    DELETE_ORGANIZATION_START,
    DELETE_ORGANIZATION_SUCCESS,
    DELETE_ORGANIZATION_FAILURE,
    GET_ORGANIZATION_START
} from '../constants/actionTypes';

const initialState = {
    organization: null,
    isFetching: false,
    error: null
};

export default (state=initialState, action) => {
    switch(action.type){
        case GET_ORGANIZATION_START:
            return {
                ...state,
                isFetching: true
            }

        case GET_ORGANIZATION_SUCCESS:
        return {
            ...state,
            organization: action.payload,
            isFetching: false
        }

        case GET_ORGANIZATION_FAILURE:
        return {
            ...state,
            error: action.payload,
            isFetching: false
        }

        case CREATE_ORGANIZATION_START:
        return {
            ...state,
        }

        case CREATE_ORGANIZATION_SUCCESS:
        return {
            ...state,
            organization: action.payload
        }

        case CREATE_ORGANIZATION_FAILURE:
        return {
            ...state,
            error: action.payload
        }

        case UPDATE_ORGANIZATION_START:
        return {
            ...state,
        }

        case UPDATE_ORGANIZATION_SUCCESS:
        return {
            ...state,
            organization: action.payload
        }

        case UPDATE_ORGANIZATION_FAILURE:
        return {
            ...state,
            error: action.payload
        }

        case DELETE_ORGANIZATION_START:
        return {
            ...state,
        }

        case DELETE_ORGANIZATION_SUCCESS:
        return {
            ...state,
            organization: action.payload
        }

        case DELETE_ORGANIZATION_FAILURE:
        return {
            ...state,
            error: action.payload
        }

        default:
            return state;
    }
}