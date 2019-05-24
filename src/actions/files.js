import {
    UPLOAD_AVATAR_START,
    UPLOAD_AVATAR_SUCCESS,
    UPLOAD_AVATAR_FAILURE,
    UPLOAD_LOGO_START,
    UPLOAD_LOGO_SUCCESS,
    UPLOAD_LOGO_FAILURE
} from '../constants/actionTypes';
import axios from 'axios';
import { API_URL } from '../constants/config';

export function uploadAvatar(avatar) {
    return async (dispatch) => {
        await dispatch(request());

        return await axios
            .post(`${API_URL}/files/avatar`, avatar)
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
            type: UPLOAD_AVATAR_SUCCESS
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
            .post(`${API_URL}/files/logo`, logo)
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
            type: UPLOAD_LOGO_SUCCESS
        };
    }

    function error(err) {
        return {
            type: UPLOAD_LOGO_FAILURE,
            payload: err
        };
    }
}
