import {
    GET_MENTEES_START,
    GET_MENTEES_SUCCESS,
    GET_MENTEES_FAILURE,
    GET_SPECIFIC_MENTEE_START,
    GET_SPECIFIC_MENTEE_SUCCESS,
    GET_SPECIFIC_MENTEE_FAILURE,
    UPDATE_MENTEE_START,
    UPDATE_MENTEE_SUCCESS,
    UPDATE_MENTEE_FAILURE,
    DELETE_MENTEE_START,
    DELETE_MENTEE_SUCCESS,
    DELETE_MENTEE_FAILURE,
    CREATE_MENTEE_START,
    CREATE_MENTEE_SUCCESS,
    CREATE_MENTEE_FAILURE,
    REMOVE_MENTEE_START,
    REMOVE_MENTEE_SUCCESS,
    REMOVE_MENTEE_FAILURE
} from '../constants/actionTypes';
import axios from 'axios';
import { API_URL } from '../constants/config';

const authHeader = {
    headers: {
        Authorization: localStorage.getItem("Authorization")
    }
};

export function getMentees(){
    return async dispatch => {
        await dispatch(request());

        return await axios
            .get(`${API_URL}/mentees`, authHeader)
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
            type: GET_MENTEES_START
        }
    }

    function success(data){
        return {
            type: GET_MENTEES_SUCCESS,
            payload: data
        }
    }

    function error(err){
        return {
            type: GET_MENTEES_FAILURE,
            payload: err
        }
    }
};

export function getSpecificMentee(id){
    return async dispatch => {
        await dispatch(request());

        return await axios
            .get(`${API_URL}/mentees/${id}`, authHeader)
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
            type: GET_SPECIFIC_MENTEE_START
        }
    }

    function success(data){
        return {
            type: GET_SPECIFIC_MENTEE_SUCCESS,
            payload: data
        }
    }

    function error(err){
        return {
            type: GET_SPECIFIC_MENTEE_FAILURE,
            payload: err
        }
    }
};

export function createMentee(menteeData){
    return async dispatch => {
        await dispatch(request());

        return await axios
            .post(`${API_URL}/mentees`, menteeData, authHeader)
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
            type: CREATE_MENTEE_START
        }
    }

    function success(data){
        return {
            type: CREATE_MENTEE_SUCCESS,
            payload: data
        }
    }

    function error(err){
        return {
            type: CREATE_MENTEE_FAILURE,
            payload: err
        }
    }
};

export function updateMentee(id, menteeData){
    return async dispatch => {
        await dispatch(request());

        return await axios
            .put(`${API_URL}/mentees/${id}`, menteeData, authHeader)
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
            type: UPDATE_MENTEE_START
        }
    }

    function success(data){
        return {
            type: UPDATE_MENTEE_SUCCESS,
            payload: data
        }
    }

    function error(err){
        return {
            type: UPDATE_MENTEE_FAILURE,
            payload: err
        }
    }
};

export function deleteMentee(id){
    return async dispatch => {
        await dispatch(request());

        return await axios
            .delete(`${API_URL}/mentees/${id}`, authHeader)
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
            type: DELETE_MENTEE_START
        }
    }

    function success(data){
        return {
            type: DELETE_MENTEE_SUCCESS,
            payload: data
        }
    }

    function error(err){
        return {
            type: DELETE_MENTEE_FAILURE,
            payload: err
        }
    }
};

export function removeMentee(id){
    return async dispatch => {
        await dispatch(request());

        return await axios
            .delete(`${API_URL}/mentees/${id}/remove`, authHeader)
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
            type: REMOVE_MENTEE_START
        }
    }

    function success(data){
        return {
            type: REMOVE_MENTEE_SUCCESS,
            payload: data
        }
    }

    function error(err){
        return {
            type: REMOVE_MENTEE_FAILURE,
            payload: err
        }
    }
};