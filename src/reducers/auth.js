import {
    LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGIN_USER_WITH_GITHUB_START,
    LOGIN_USER_WITH_GITHUB_SUCCESS,
    LOGIN_USER_WITH_GITHUB_FAILURE,
    REGISTER_ORGANIZATION_START,
    REGISTER_ORGANIZATION_SUCCESS,
    REGISTER_ORGANIZATION_FAILURE,
    REGISTER_WITH_INVITATION_START,
    REGISTER_WITH_INVITATION_SUCCESS,
    REGISTER_WITH_INVITATION_FAILURE,
    GITHUB_REGISTER_WITH_INVITATION_START,
    GITHUB_REGISTER_WITH_INVITATION_SUCCESS,
    GITHUB_REGISTER_WITH_INVITATION_FAILURE
} from "../constants/actionTypes";

const initialState = {
    token: localStorage.getItem("Authorization"),
    registeringUser: false,
    newUser: null,
    loggingInUser: false,
    currentUser: null,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_START:
            return {
                ...state,
                loggingInUser: true
            };

        case LOGIN_USER_SUCCESS:
            localStorage.setItem('Authorization', action.payload.token);
            return {
                ...state,
                loggingInUser: false,
                token: action.payload.token
            };

        case LOGIN_USER_FAILURE:
            return {
                ...state,
                loggingInUser: false,
                error: action.payload
            };

        case LOGIN_USER_WITH_GITHUB_START:
            return {
                ...state,
                loggingInUser: true
            };

        case LOGIN_USER_WITH_GITHUB_SUCCESS:
            return {
                ...state,
                loggingInUser: false
            };

        case LOGIN_USER_WITH_GITHUB_FAILURE:
            return {
                ...state,
                loggingInUser: false
            };

        case REGISTER_ORGANIZATION_START:
            return {
                ...state,
                registeringUser: true
            };

        case REGISTER_ORGANIZATION_SUCCESS:
            return {
                ...state,
                registeringUser: false
            };

        case REGISTER_ORGANIZATION_FAILURE:
            return {
                ...state,
                registeringUser: false
            };

        case REGISTER_WITH_INVITATION_START:
            return {
                ...state,
                registeringUser: true
            };

        case REGISTER_WITH_INVITATION_SUCCESS:
            return {
                ...state,
                registeringUser: false
            };

        case REGISTER_WITH_INVITATION_FAILURE:
            return {
                ...state,
                registeringUser: false
            };

        case GITHUB_REGISTER_WITH_INVITATION_START:
            return {
                state,
                registeringUser: true
            };

        case GITHUB_REGISTER_WITH_INVITATION_SUCCESS:
            return {
                ...state,
                registeringUser: false
            };

        case GITHUB_REGISTER_WITH_INVITATION_FAILURE:
            return {
                ...state,
                registeringUser: false
            };

        default:
            return state;
    }
};
