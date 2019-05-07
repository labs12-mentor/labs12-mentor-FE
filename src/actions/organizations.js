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
import axios from 'axios';
import { API_URL } from '../constants/config';
import { history } from '../';

const authHeader = {
    headers: {
        Authorization: localStorage.getItem("Authorization")
    }
};

export function getOrganizations(){
    return async dispatch => {
        await dispatch(request());

        return await axios
            .get(`${API_URL}/organizations`, authHeader)
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
            type: GET_ORGANIZATIONS_START
        }
    }

    function success(data){
        return {
            type: GET_ORGANIZATIONS_SUCCESS,
            payload: data
        }
    }

    function error(err){
        return {
            type: GET_ORGANIZATIONS_FAILURE,
            payload: err
        }
    }
};

export function getSpecificOrganization(id){
    return async dispatch => {
        await dispatch(request());

        return await axios
            .get(`${API_URL}/organizations/${id}`, authHeader)
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
            type: GET_SPECIFIC_ORGANIZATION_START
        }
    }

    function success(data){
        return {
            type: GET_SPECIFIC_ORGANIZATION_SUCCESS,
            payload: data
        }
    }

    function error(err){
        return {
            type: GET_SPECIFIC_ORGANIZATION_FAILURE,
            payload: err
        }
    }
};

export function updateOrganization(id, organizationData){
    return async dispatch => {
        await dispatch(request());

        return await axios
            .put(`${API_URL}/organizations/${id}`, organizationData, authHeader)
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
            type: UPDATE_ORGANIZATION_START
        }
    }

    function success(data){
        return {
            type: UPDATE_ORGANIZATION_SUCCESS,
            payload: data
        }
    }

    function error(err){
        return {
            type: UPDATE_ORGANIZATION_FAILURE,
            payload: err
        }
    }
};

export function deleteOrganization(id){
    return async dispatch => {
        await dispatch(request());

        return await axios
            .delete(`${API_URL}/organizations/${id}`, authHeader)
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
            type: DELETE_ORGANIZATION_START
        }
    }

    function success(data){
        return {
            type: DELETE_ORGANIZATION_SUCCESS,
            payload: data
        }
    }

    function error(err){
        return {
            type: DELETE_ORGANIZATION_FAILURE,
            payload: err
        }
    }
};

export function removeOrganization(id){
    return async dispatch => {
        await dispatch(request());

        return await axios
            .delete(`${API_URL}/organizations/${id}/remove`, authHeader)
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
            type: REMOVE_ORGANIZATION_START
        }
    }

    function success(data){
        return {
            type: REMOVE_ORGANIZATION_SUCCESS,
            payload: data
        }
    }

    function error(err){
        return {
            type: REMOVE_ORGANIZATION_FAILURE,
            payload: err
        }
    }
};