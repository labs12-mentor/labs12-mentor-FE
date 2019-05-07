import {
    GET_MEETINGS_START,
    GET_MEETINGS_SUCCESS,
    GET_MEETINGS_FAILURE,
    GET_SPECIFIC_MEETING_START,
    GET_SPECIFIC_MEETING_FAILURE,
    GET_SPECIFIC_MEETING_SUCCESS,
    CREATE_MEETING_START,
    CREATE_MEETING_SUCCESS,
    CREATE_MEETING_FAILURE,
    UPDATE_MEETING_START,
    UPDATE_MEETING_SUCCESS,
    UPDATE_MEETING_FAILURE,
    DELETE_MEETING_START,
    DELETE_MEETING_SUCCESS,
    DELETE_MEETING_FAILURE,
    REMOVE_MEETING_START,
    REMOVE_MEETING_SUCCESS,
    REMOVE_MEETING_FAILURE
} from '../constants/actionTypes';
import axios from 'axios';
import { API_URL } from '../constants/config';
import { history } from '../';

const authHeader = {
    headers: {
        Authorization: localStorage.getItem("Authorization")
    }
};

export function getMeetings(){
    return async dispatch => {
        await dispatch(request());

        return await axios
            .get(`${API_URL}/meetings`, authHeader)
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
            type: GET_MEETINGS_START
        }
    }

    function success(data){
        return {
            type: GET_MEETINGS_SUCCESS,
            payload: data
        }
    }

    function error(err){
        return {
            type: GET_MEETINGS_FAILURE,
            payload: err
        }
    }
};

export function getSpecificMeeting(id){
    return async dispatch => {
        await dispatch(request());

        return await axios
            .get(`${API_URL}/meetings/${id}`, authHeader)
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
            type: GET_SPECIFIC_MEETING_START
        }
    }

    function success(data){
        return {
            type: GET_SPECIFIC_MEETING_SUCCESS,
            payload: data
        }
    }

    function error(err){
        return {
            type: GET_SPECIFIC_MEETING_FAILURE,
            payload: err
        }
    }
};

export function createMeeting(meetingData){
    return async dispatch => {
        await dispatch(request());

        return await axios
            .post(`${API_URL}/meetings`, meetingData, authHeader)
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
            type: CREATE_MEETING_START
        }
    }

    function success(data){
        return {
            type: CREATE_MEETING_SUCCESS,
            payload: data
        }
    }

    function error(err){
        return {
            type: CREATE_MEETING_FAILURE,
            payload: err
        }
    }
};

export function updateMeeting(id, meetingData){
    return async dispatch => {
        await dispatch(request());

        return await axios
            .put(`${API_URL}/meetings/${id}`, meetingData, authHeader)
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
            type: UPDATE_MEETING_START
        }
    }

    function success(data){
        return {
            type: UPDATE_MEETING_SUCCESS,
            payload: data
        }
    }

    function error(err){
        return {
            type: UPDATE_MEETING_FAILURE,
            payload: err
        }
    }
};

export function deleteMeeting(id){
    return async dispatch => {
        await dispatch(request());

        return await axios
            .delete(`${API_URL}/meetings/${id}`, authHeader)
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
            type: DELETE_MEETING_START
        }
    }

    function success(data){
        return {
            type: DELETE_MEETING_SUCCESS,
            payload: data
        }
    }

    function error(err){
        return {
            type: DELETE_MEETING_FAILURE,
            payload: err
        }
    }
};

export function removeMeeting(id){
    return async dispatch => {
        await dispatch(request());

        return await axios
            .delete(`${API_URL}/meetings/${id}/remove`, authHeader)
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
            type: REMOVE_MEETING_START
        }
    }

    function success(data){
        return {
            type: REMOVE_MEETING_SUCCESS,
            payload: data
        }
    }

    function error(err){
        return {
            type: REMOVE_MEETING_FAILURE,
            payload: err
        }
    }
};