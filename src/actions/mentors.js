import {
    GET_MENTORS_START,
    GET_MENTORS_SUCCESS,
    GET_MENTORS_FAILURE,
    GET_SPECIFIC_MENTOR_START,
    GET_SPECIFIC_MENTOR_SUCCESS,
    GET_SPECIFIC_MENTOR_FAILURE,
    UPDATE_MENTOR_START,
    UPDATE_MENTOR_SUCCESS,
    UPDATE_MENTOR_FAILURE,
    DELETE_MENTOR_START,
    DELETE_MENTOR_SUCCESS,
    DELETE_MENTOR_FAILURE,
    CREATE_MENTOR_START,
    CREATE_MENTOR_SUCCESS,
    CREATE_MENTOR_FAILURE,
    REMOVE_MENTOR_START,
    REMOVE_MENTOR_SUCCESS,
    REMOVE_MENTOR_FAILURE
} from '../constants/actionTypes';
import axios from 'axios';
import { API_URL } from '../constants/config';
import { history } from '../';

const authHeader = {
    headers: {
        Authorization: localStorage.getItem("Authorization")
    }
};

export function getMentors(){
    return async dispatch => {
        await dispatch(request());

        return await axios
            .get(`${API_URL}/mentors`, authHeader)
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
            type: GET_MENTORS_START
        }
    }

    function success(data){
        return {
            type: GET_MENTORS_SUCCESS,
            payload: data
        }
    }

    function error(err){
        return {
            type: GET_MENTORS_FAILURE,
            payload: err
        }
    }
};

export function getSpecificMentor(id){
    return async dispatch => {
        await dispatch(request());

        return await axios
            .get(`${API_URL}/mentors/${id}`, authHeader)
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
            type: GET_SPECIFIC_MENTOR_START
        }
    }

    function success(data){
        return {
            type: GET_SPECIFIC_MENTOR_SUCCESS,
            payload: data
        }
    }

    function error(err){
        return {
            type: GET_SPECIFIC_MENTOR_FAILURE,
            payload: err
        }
    }
};

export function createMentor(mentorData){
    return async dispatch => {
        await dispatch(request());

        return await axios
            .post(`${API_URL}/mentors`, mentorData, authHeader)
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
            type: CREATE_MENTOR_START
        }
    }

    function success(data){
        return {
            type: CREATE_MENTOR_SUCCESS,
            payload: data
        }
    }

    function error(err){
        return {
            type: CREATE_MENTOR_FAILURE,
            payload: err
        }
    }
};

export function updateMentor(id, mentorData){
    return async dispatch => {
        await dispatch(request());

        return await axios
            .put(`${API_URL}/mentors/${id}`, mentorData, authHeader)
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
            type: UPDATE_MENTOR_START
        }
    }

    function success(data){
        return {
            type: UPDATE_MENTOR_SUCCESS,
            payload: data
        }
    }

    function error(err){
        return {
            type: UPDATE_MENTOR_FAILURE,
            payload: err
        }
    }
};

export function deleteMentor(id){
    return async dispatch => {
        await dispatch(request());

        return await axios
            .delete(`${API_URL}/mentors/${id}`, authHeader)
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
            type: DELETE_MENTOR_START
        }
    }

    function success(data){
        return {
            type: DELETE_MENTOR_SUCCESS,
            payload: data
        }
    }

    function error(err){
        return {
            type: DELETE_MENTOR_FAILURE,
            payload: err
        }
    }
};

export function removeMentor(id){
    return async dispatch => {
        await dispatch(request());

        return await axios
            .delete(`${API_URL}/mentors/${id}/remove`, authHeader)
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
            type: REMOVE_MENTOR_START
        }
    }

    function success(data){
        return {
            type: REMOVE_MENTOR_SUCCESS,
            payload: data
        }
    }

    function error(err){
        return {
            type: REMOVE_MENTOR_FAILURE,
            payload: err
        }
    }
};