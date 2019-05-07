import {
    LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    REGISTER_ORGANIZATION_START,
    REGISTER_ORGANIZATION_SUCCESS,
    REGISTER_ORGANIZATION_FAILURE,
    LOGIN_USER_WITH_GITHUB_START,
    LOGIN_USER_WITH_GITHUB_SUCCESS,
    LOGIN_USER_WITH_GITHUB_FAILURE
} from '../constants/actionTypes';

const initialState = {
    
}

export default (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}