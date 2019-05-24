import {
    FETCH_FILE_START,
    FETCH_FILE_SUCCESS,
    FETCH_FILE_FAILURE,
    UPLOAD_AVATAR_START,
    UPLOAD_AVATAR_SUCCESS,
    UPLOAD_AVATAR_FAILURE,
    UPLOAD_LOGO_START,
    UPLOAD_LOGO_SUCCESS,
    UPLOAD_LOGO_FAILURE
} from '../constants/actionTypes';
import axios from 'axios';
import { API_URL } from '../constants/config';

export function fetchCurrentFile() {
    return async (dispatch) => {
        await dispatch(request());
        return await dispatch(success());
    }

    function request() {
        return {
            type: FETCH_FILE_START
        };
    }

    function success(data) {
        return {
            type: FETCH_FILE_SUCCESS,
        };
    }

    function error(err) {
        return {
            type: FETCH_FILE_FAILURE,
            payload: err
        };
    }
}

export function uploadAvatar(avatar) {
    return async (dispatch) => {
        await dispatch(request());

        return await axios
            .post(`${API_URL}/files/avatar`, avatar, {
                headers: {
                    ContentType: 'multipart/form-data',
                    Authorization: localStorage.getItem('Authorization')
                }
            })
            .then(async (res) => {
                if (res.status === 200) {
                    return await dispatch(success(res.data));
                } else {
                    await dispatch(error(res.data.error));
                    return await Promise.reject(res.data);
                }
            })
            .catch(async (err) => {
                return await dispatch(error(err));
            });
    };

    function request() {
        return {
            type: UPLOAD_AVATAR_START
        };
    }

    function success(data) {
        return {
            type: UPLOAD_AVATAR_SUCCESS,
            payload: data.imageUrl
        };
    }

    function error(err) {
        return {
            type: UPLOAD_AVATAR_FAILURE,
            payload: err
        };
    }
}

export function uploadLogo(logo) {
    return async (dispatch) => {
        await dispatch(request());

        return await axios
            .post(`${API_URL}/files/logo`, logo, {
                headers: {
                    ContentType: 'multipart/form-data',
                    Authorization: localStorage.getItem('Authorization')
                }
            })
            .then(async (res) => {
                if (res.status === 200) {
                    return await dispatch(success(res.data));
                } else {
                    await dispatch(error(res.data.error));
                    return await Promise.reject(res.data);
                }
            })
            .catch(async (err) => {
                return await dispatch(error(err));
            });
    };

    function request() {
        return {
            type: UPLOAD_LOGO_START
        };
    }

    function success(data) {
        return {
            type: UPLOAD_LOGO_SUCCESS,
            payload: data.imageUrl
        };
    }

    function error(err) {
        return {
            type: UPLOAD_LOGO_FAILURE,
            payload: err
        };
    }
}
