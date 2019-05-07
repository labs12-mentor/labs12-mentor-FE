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
} from '../constants/actionTypes';

const initialState = {
    token: localStorage.getItem('token'),
    registeringUser: false,
    newUser: null,
    loggingInUser: false,
    currentUser: false,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type){
      case LOGIN_USER_START:
            return {
                ...state,
                loggingInUser: true,
            }
        default:
            return state;
    }
}