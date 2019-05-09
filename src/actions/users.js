import {
    GET_USERS_START,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
    GET_SPECIFIC_USER_START,
    GET_SPECIFIC_USER_FAILURE,
    GET_SPECIFIC_USER_SUCCESS,
    UPDATE_USER_START,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    DELETE_USER_START,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
    REMOVE_USER_START,
    REMOVE_USER_SUCCESS,
    REMOVE_USER_FAILURE
} from '../constants/actionTypes';
import axios from 'axios';
import { API_URL } from '../constants/config';

const authHeader = {
    headers: {
        //Authorization: localStorage.getItem("Authorization")
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxMjMsImlhdCI6MTU1NzQzNjAxNCwiZXhwIjoxNTU3NTIyNDE0fQ.uvved0mkHMRhCgfz658RJWCneGr_uW7k9brrqJ9VxhA"
    }
};

export function getUsers(){
    return async dispatch => {
        await dispatch(request());

        return await axios
            .get(`${API_URL}/users`, authHeader)
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
            type: GET_USERS_START
        }
    }

    function success(data){
        return {
            type: GET_USERS_SUCCESS,
            payload: data
        }
    }

    function error(err){
        return {
            type: GET_USERS_FAILURE,
            payload: err
        }
    }
};

export function getSpecificUser(id){
    return async dispatch => {
        await dispatch(request());

        return await axios
            .get(`${API_URL}/users/${id}`, authHeader)
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
            type: GET_SPECIFIC_USER_START
        }
    }

    function success(data){
        return {
            type: GET_SPECIFIC_USER_SUCCESS,
            payload: data
        }
    }

    function error(err){
        return {
            type: GET_SPECIFIC_USER_FAILURE,
            payload: err
        }
    }
};

export function updateUser(id, userData){
    return async dispatch => {
        await dispatch(request());

        return await axios
            .put(`${API_URL}/users/${id}`, userData, authHeader)
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
            type: UPDATE_USER_START
        }
    }

    function success(data){
        return {
            type: UPDATE_USER_SUCCESS,
            payload: data
        }
    }

    function error(err){
        return {
            type: UPDATE_USER_FAILURE,
            payload: err
        }
    }
};

export function deleteUser(id){
    return async dispatch => {
        await dispatch(request());

        return await axios
            .delete(`${API_URL}/users/${id}`, authHeader)
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
            type: DELETE_USER_START
        }
    }

    function success(data){
        return {
            type: DELETE_USER_SUCCESS,
            payload: data
        }
    }

    function error(err){
        return {
            type: DELETE_USER_FAILURE,
            payload: err
        }
    }
};

export function removeUser(id){
    return async dispatch => {
        await dispatch(request());

        return await axios
            .delete(`${API_URL}/users/${id}/remove`, authHeader)
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
            type: REMOVE_USER_START
        }
    }

    function success(data){
        return {
            type: REMOVE_USER_SUCCESS,
            payload: data
        }
    }

    function error(err){
        return {
            type: REMOVE_USER_FAILURE,
            payload: err
        }
    }
};