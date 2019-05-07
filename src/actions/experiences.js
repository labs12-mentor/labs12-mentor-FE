import {
    GET_EXPERIENCES_START,
    GET_EXPERIENCES_SUCCESS,
    GET_EXPERIENCES_FAILURE,
    GET_SPECIFIC_EXPERIENCE_START,
    GET_SPECIFIC_EXPERIENCE_SUCCESS,
    GET_SPECIFIC_EXPERIENCE_FAILURE,
    UPDATE_EXPERIENCE_START,
    UPDATE_EXPERIENCE_SUCCESS,
    UPDATE_EXPERIENCE_FAILURE,
    DELETE_EXPERIENCE_START,
    DELETE_EXPERIENCE_SUCCESS,
    DELETE_EXPERIENCE_FAILURE,
    CREATE_EXPERIENCE_START,
    CREATE_EXPERIENCE_SUCCESS,
    CREATE_EXPERIENCE_FAILURE,
    REMOVE_EXPERIENCE_START,
    REMOVE_EXPERIENCE_SUCCESS,
    REMOVE_EXPERIENCE_FAILURE
} from '../constants/actionTypes';
import axios from 'axios';
import { API_URL } from '../constants/config';
import { history } from '../';

const authHeader = {
    headers: {
        Authorization: localStorage.getItem("Authorization")
    }
};

export function getExperiences(){
    return async dispatch => {
        await dispatch(request());

        return await axios
            .get(`${API_URL}+/experiences`, authHeader)
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
            type: GET_EXPERIENCES_START
        }
    }

    function success(data){
        return {
            type: GET_EXPERIENCES_SUCCESS,
            payload: data
        }
    }

    function error(err){
        return {
            type: GET_EXPERIENCES_FAILURE,
            payload: err
        }
    }
};

export function getSpecificExperience(id){
    return async dispatch => {
        await dispatch(request());

        return await axios
            .get(`${API_URL}+/experiences/${id}`, authHeader)
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
            type: GET_SPECIFIC_EXPERIENCE_START
        }
    }

    function success(data){
        return {
            type: GET_SPECIFIC_EXPERIENCE_SUCCESS,
            payload: data
        }
    }

    function error(err){
        return {
            type: GET_SPECIFIC_EXPERIENCE_FAILURE,
            payload: err
        }
    }
};

export function createExperience(experienceData){
    return async dispatch => {
        await dispatch(request());

        return await axios
            .post(`${API_URL}+/experiences`, experienceData, authHeader)
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
            type: CREATE_EXPERIENCE_START
        }
    }

    function success(data){
        return {
            type: CREATE_EXPERIENCE_SUCCESS,
            payload: data
        }
    }

    function error(err){
        return {
            type: CREATE_EXPERIENCE_FAILURE,
            payload: err
        }
    }
};

export function updateExperience(id, experienceData){
    return async dispatch => {
        await dispatch(request());

        return await axios
            .put(`${API_URL}+/experiences/${id}`, experienceData, authHeader)
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
            type: UPDATE_EXPERIENCE_START
        }
    }

    function success(data){
        return {
            type: UPDATE_EXPERIENCE_SUCCESS,
            payload: data
        }
    }

    function error(err){
        return {
            type: UPDATE_EXPERIENCE_FAILURE,
            payload: err
        }
    }
};

export function deleteExperience(id){
    return async dispatch => {
        await dispatch(request());

        return await axios
            .delete(`${API_URL}+/experiences/${id}`, authHeader)
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
            type: DELETE_EXPERIENCE_START
        }
    }

    function success(data){
        return {
            type: DELETE_EXPERIENCE_SUCCESS,
            payload: data
        }
    }

    function error(err){
        return {
            type: DELETE_EXPERIENCE_FAILURE,
            payload: err
        }
    }
};

export function removeExperience(id){
    return async dispatch => {
        await dispatch(request());

        return await axios
            .delete(`${API_URL}+/experiences/${id}/remove`, authHeader)
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
            type: REMOVE_EXPERIENCE_START
        }
    }

    function success(data){
        return {
            type: REMOVE_EXPERIENCE_SUCCESS,
            payload: data
        }
    }

    function error(err){
        return {
            type: REMOVE_EXPERIENCE_FAILURE,
            payload: err
        }
    }
};