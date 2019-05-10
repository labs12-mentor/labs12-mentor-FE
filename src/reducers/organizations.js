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
    organizations: [],
    isFetching: false,
    currentOrganization: null,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ORGANIZATIONS_START:
            return {
                ...state,
                isFetching: true
            };

        case GET_ORGANIZATIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                organizations: action.payload.sort((a, b) => {
                    if (a.id < b.id) return -1;
                    if (a.id > b.id) return 1;
                    return 0;
                })
            };

        case GET_ORGANIZATIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case GET_SPECIFIC_ORGANIZATION_START:
            return {
                ...state,
                isFetching: true
            };

        case GET_SPECIFIC_ORGANIZATION_SUCCESS:
            return {
                ...state,
                isFetching: false,
                currentOrganization: action.payload
            };

        case GET_SPECIFIC_ORGANIZATION_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case UPDATE_ORGANIZATION_START:
            return {
                ...state,
                isFetching: true
            };

        case UPDATE_ORGANIZATION_SUCCESS:
            return {
                ...state,
                isFetching: false,
                organizations: [
                    ...state.organizations.filter((elem) => elem.id !== action.payload.id),
                    action.payload
                ].sort((a, b) => {
                    if (a.id < b.id) return -1;
                    if (a.id > b.id) return 1;
                    return 0;
                })
            };

        case UPDATE_ORGANIZATION_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case DELETE_ORGANIZATION_START:
            return {
                ...state,
                isFetching: true
            };

        case DELETE_ORGANIZATION_SUCCESS:
            return {
                ...state,
                isFetching: false,
                organizations: state.organizations.filter((elem) => elem.id !== action.payload)
            };

        case DELETE_ORGANIZATION_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case REMOVE_ORGANIZATION_START:
            return {
                ...state,
                isFetching: true
            };

        case REMOVE_ORGANIZATION_SUCCESS:
            return {
                ...state,
                isFetching: false,
                organizations: state.organizations.filter((elem) => elem.id !== action.payload)
            };

        case REMOVE_ORGANIZATION_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        default:
            return state;
    }
};
