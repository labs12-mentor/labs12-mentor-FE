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
    GITHUB_REGISTER_WITH_INVITATION_FAILURE,
    GET_CURRENT_USER_START,
    GET_CURRENT_USER_SUCCESS,
    GET_CURRENT_USER_FAILURE
} from "../constants/actionTypes";

const initialState = {
    token: localStorage.getItem("Authorization"),
    isFetching: false,
    currentUser: null,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_START:
            return {
                ...state,
                isFetching: true
            };

        case LOGIN_USER_SUCCESS:
            localStorage.setItem('Authorization', action.payload.token);
            return {
                ...state,
                isFetching: false,
                token: action.payload.token
            };

        case LOGIN_USER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case LOGIN_USER_WITH_GITHUB_START:
            return {
                ...state,
                isFetching: true
            };

        case LOGIN_USER_WITH_GITHUB_SUCCESS:
            localStorage.setItem('Authorization', action.payload.token);
            let {message: messageGithub, token: tokenGithub, ...userGithub} = action.payload;
            return {
                ...state,
                isFetching: false,
                token: tokenGithub,
                currentUser: userGithub
            };

        case LOGIN_USER_WITH_GITHUB_FAILURE:
            return {
                ...state,
                isFetching: false
            };

        case REGISTER_ORGANIZATION_START:
            return {
                ...state,
                isFetching: true
            };

        case REGISTER_ORGANIZATION_SUCCESS:
            return {
                ...state,
                isFetching: false
            };

        case REGISTER_ORGANIZATION_FAILURE:
            return {
                ...state,
                isFetching: false
            };

        case REGISTER_WITH_INVITATION_START:
            return {
                ...state,
                isFetching: true
            };

        case REGISTER_WITH_INVITATION_SUCCESS:
            return {
                ...state,
                isFetching: false
            };

        case REGISTER_WITH_INVITATION_FAILURE:
            return {
                ...state,
                isFetching: false
            };

        case GITHUB_REGISTER_WITH_INVITATION_START:
            return {
                ...state,
                isFetching: true
            };

        case GITHUB_REGISTER_WITH_INVITATION_SUCCESS:
            return {
                ...state,
                isFetching: false
            };

        case GITHUB_REGISTER_WITH_INVITATION_FAILURE:
            return {
                ...state,
                isFetching: false
            };

        case GET_CURRENT_USER_START:
            return {
                ...state,
                isFetching: true
            };

        case GET_CURRENT_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                currentUser: action.payload
            };

        case GET_CURRENT_USER_FAILURE:
            return {
                ...state,
                isFetching: false
            };

        default:
            return state;
    }
};
