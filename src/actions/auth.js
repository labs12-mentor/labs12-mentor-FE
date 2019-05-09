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
} from '../constants/actionTypes';
import axios from 'axios';
import { API_URL } from '../constants/config';

const authHeader = {
    headers: {
        Authorization: localStorage.getItem("Authorization")
    }
};

export function loginUser(credentials){
    return async dispatch => {
        await dispatch(request());

        return await axios
            .post(`${API_URL}/auth/login`, credentials)
            .then(async res => {
                if(res.status === 200){
                    return await dispatch(success(res.data));
                }else{
                    await dispatch(error(res.data.error));
                    return await Promise.reject(res.data);
                }
            })
            .catch(async err => {
                return await dispatch(error(err));
            });
    }

    function request(){
        return {
            type: LOGIN_USER_START
        }
    }

    function success(data){
        return {
            type: LOGIN_USER_SUCCESS,
            payload: data
        }
    }

    function error(err){
        return {
            type: LOGIN_USER_FAILURE,
            payload: err
        }
    }
};

export function registerOrganization(orgData){
    return async dispatch => {
        await dispatch(request());

        return await axios
            .post(`${API_URL}/auth/register`, orgData)
            .then(async res => {
                if(res.status === 201){
                    return await dispatch(success(res.data));
                }else{
                    await dispatch(error(res.data.error));
                    return await Promise.reject(res.data);
                }
            })
            .catch(async err => {
                return await dispatch(error(err));
            });
    }

    function request(){
        return {
            type: REGISTER_ORGANIZATION_START
        }
    }

    function success(data){
        return {
            type: REGISTER_ORGANIZATION_SUCCESS,
            payload: data
        }
    }

    function error(err){
        return {
            type: REGISTER_ORGANIZATION_FAILURE,
            payload: err
        }
    }
};

export function registerUser(invitation_id, userData){
    return async dispatch => {
        await dispatch(request());

        return await axios
            .post(`${API_URL}+/invitations/${invitation_id}`, userData)
            .then(async res => {
                if(res.status === 201){
                    return await dispatch(success(res.data));
                }else{
                    await dispatch(error(res.data.error));
                    return await Promise.reject(res.data);
                }
            })
            .catch(async err => {
                return await dispatch(error(err));
            });
    }

    function request(){
        return {
            type: REGISTER_WITH_INVITATION_START
        }
    }

    function success(data){
        return {
            type: REGISTER_WITH_INVITATION_SUCCESS,
            payload: data
        }
    }

    function error(err){
        return {
            type: REGISTER_WITH_INVITATION_FAILURE,
            payload: err
        }
    }
};

export function getCurrentUser(){
    return async dispatch => {
        await dispatch(request());

        return await axios
            .get(`${API_URL}/users/current_user`, authHeader)
            .then(async res => {
                if(res.status === 200){
                    return await dispatch(success(res.data));
                }else{
                    await dispatch(error(res.data.error));
                    return await Promise.reject(res.data);
                }
            })
            .catch(async err => {
                return await dispatch(error(err));
            });
    }

    function request(){
        return {
            type: GET_CURRENT_USER_START
        }
    }

    function success(data){
        return {
            type: GET_CURRENT_USER_SUCCESS,
            payload: data
        }
    }

    function error(err){
        return {
            type: GET_CURRENT_USER_FAILURE,
            payload: err
        }
    }
};

export function githubAuthStart(){
    return async dispatch => {
        await dispatch(request());
    }

    function request(){
        return {
            type: LOGIN_USER_WITH_GITHUB_START,
        }
    }
}

export function githubAuthSuccess(data){
    return async dispatch => {
        await dispatch(success(data));
    }

    function success(data){
        return {
            type: LOGIN_USER_WITH_GITHUB_SUCCESS,
            payload: data
        }
    }
}

export function githubAuthFailure(err){
    return async dispatch => {
        await dispatch(error(err));
    }

    function error(err){
        return {
            type: LOGIN_USER_WITH_GITHUB_FAILURE,
            payload: err
        }
    }
}

export function githubRegisterWithInvitationStart(){
    return async dispatch => {
        await dispatch(request());
    }

    function request(){
        return {
            type: GITHUB_REGISTER_WITH_INVITATION_START,
        }
    }
}

export function githubRegisterWithInvitationSuccess(data){
    return async dispatch => {
        await dispatch(success(data));
    }

    function success(data){
        return {
            type: GITHUB_REGISTER_WITH_INVITATION_SUCCESS,
            payload: data
        }
    }
}

export function githubRegisterWithInvitationFailure(err){
    return async dispatch => {
        await dispatch(error(err));
    }

    function error(err){
        return {
            type: GITHUB_REGISTER_WITH_INVITATION_FAILURE,
            payload: err
        }
    }
}