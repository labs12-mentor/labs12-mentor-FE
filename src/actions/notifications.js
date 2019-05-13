import {
    GET_NOTIFICATIONS_START,
    GET_NOTIFICATIONS_SUCCESS,
    GET_NOTIFICATIONS_FAILURE,
    GET_SPECIFIC_NOTIFICATION_START,
    GET_SPECIFIC_NOTIFICATION_SUCCESS,
    GET_SPECIFIC_NOTIFICATION_FAILURE,
    UPDATE_NOTIFICATION_START,
    UPDATE_NOTIFICATION_SUCCESS,
    UPDATE_NOTIFICATION_FAILURE,
    MARK_NOTIFICATION_START,
    MARK_NOTIFICATION_SUCCESS,
    MARK_NOTIFICATION_FAILURE,
    DELETE_NOTIFICATION_START,
    DELETE_NOTIFICATION_SUCCESS,
    DELETE_NOTIFICATION_FAILURE,
    CREATE_NOTIFICATION_START,
    CREATE_NOTIFICATION_SUCCESS,
    CREATE_NOTIFICATION_FAILURE,
    REMOVE_NOTIFICATION_START,
    REMOVE_NOTIFICATION_SUCCESS,
    REMOVE_NOTIFICATION_FAILURE
} from '../constants/actionTypes';
import axios from 'axios';
import { API_URL } from '../constants/config';

export function getNotifications() {
    return async (dispatch) => {
        await dispatch(request());

        return await axios
            .get(`${API_URL}/notifications`, {
                headers: { Authorization: localStorage.getItem('Authorization') }
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
            type: GET_NOTIFICATIONS_START
        };
    }

    function success(data) {
        return {
            type: GET_NOTIFICATIONS_SUCCESS,
            payload: data
        };
    }

    function error(err) {
        return {
            type: GET_NOTIFICATIONS_FAILURE,
            payload: err
        };
    }
}

export function getSpecificNotification(id) {
    return async (dispatch) => {
        await dispatch(request());

        return await axios
            .get(`${API_URL}/notifications/${id}`, {
                headers: { Authorization: localStorage.getItem('Authorization') }
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
            type: GET_SPECIFIC_NOTIFICATION_START
        };
    }

    function success(data) {
        return {
            type: GET_SPECIFIC_NOTIFICATION_SUCCESS,
            payload: data
        };
    }

    function error(err) {
        return {
            type: GET_SPECIFIC_NOTIFICATION_FAILURE,
            payload: err
        };
    }
}

export function createNotification(notificationData) {
    return async (dispatch) => {
        await dispatch(request());

        return await axios
            .post(`${API_URL}/notifications`, notificationData, {
                headers: { Authorization: localStorage.getItem('Authorization') }
            })
            .then(async (res) => {
                if (res.status === 201) {
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
            type: CREATE_NOTIFICATION_START
        };
    }

    function success(data) {
        return {
            type: CREATE_NOTIFICATION_SUCCESS,
            payload: data
        };
    }

    function error(err) {
        return {
            type: CREATE_NOTIFICATION_FAILURE,
            payload: err
        };
    }
}

export function updateNotification(id, notificationData) {
    return async (dispatch) => {
        await dispatch(request());

        return await axios
            .put(`${API_URL}/notifications/${id}`, notificationData, {
                headers: { Authorization: localStorage.getItem('Authorization') }
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
            type: UPDATE_NOTIFICATION_START
        };
    }

    function success(data) {
        return {
            type: UPDATE_NOTIFICATION_SUCCESS,
            payload: data
        };
    }

    function error(err) {
        return {
            type: UPDATE_NOTIFICATION_FAILURE,
            payload: err
        };
    }
}

export function markNotification(id) {
    return async (dispatch) => {
        await dispatch(request());
        return await axios
            .patch(
                `${API_URL}/notifications/${id}`,
                {},
                { headers: { Authorization: localStorage.getItem('Authorization') } }
            )
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
            type: MARK_NOTIFICATION_START
        };
    }

    function success(data) {
        return {
            type: MARK_NOTIFICATION_SUCCESS,
            payload: data
        };
    }

    function error(err) {
        return {
            type: MARK_NOTIFICATION_FAILURE,
            payload: err
        };
    }
}

export function deleteNotification(id) {
    return async (dispatch) => {
        await dispatch(request());

        return await axios
            .delete(`${API_URL}/notifications/${id}`, {
                headers: { Authorization: localStorage.getItem('Authorization') }
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
            type: DELETE_NOTIFICATION_START
        };
    }

    function success(data) {
        return {
            type: DELETE_NOTIFICATION_SUCCESS,
            payload: data
        };
    }

    function error(err) {
        return {
            type: DELETE_NOTIFICATION_FAILURE,
            payload: err
        };
    }
}

export function removeNotification(id) {
    return async (dispatch) => {
        await dispatch(request());

        return await axios
            .delete(`${API_URL}/notifications/${id}/remove`, {
                headers: { Authorization: localStorage.getItem('Authorization') }
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
            type: REMOVE_NOTIFICATION_START
        };
    }

    function success(data) {
        return {
            type: REMOVE_NOTIFICATION_SUCCESS,
            payload: data
        };
    }

    function error(err) {
        return {
            type: REMOVE_NOTIFICATION_FAILURE,
            payload: err
        };
    }
}
