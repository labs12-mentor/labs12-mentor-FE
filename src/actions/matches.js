import {
    GET_MATCHES_START,
    GET_MATCHES_SUCCESS,
    GET_MATCHES_FAILURE,
    GET_SPECIFIC_MATCH_START,
    GET_SPECIFIC_MATCH_SUCCESS,
    GET_SPECIFIC_MATCH_FAILURE,
    UPDATE_MATCH_START,
    UPDATE_MATCH_SUCCESS,
    UPDATE_MATCH_FAILURE,
    DELETE_MATCH_START,
    DELETE_MATCH_SUCCESS,
    DELETE_MATCH_FAILURE,
    CREATE_MATCH_START,
    CREATE_MATCH_SUCCESS,
    CREATE_MATCH_FAILURE,
    REMOVE_MATCH_START,
    REMOVE_MATCH_SUCCESS,
    REMOVE_MATCH_FAILURE
} from '../constants/actionTypes';
import axios from 'axios';
import { API_URL } from '../constants/config';

const authHeader = {
    headers: {
        Authorization: localStorage.getItem('Authorization')
    }
};

export function getMatches() {
    return async (dispatch) => {
        await dispatch(request());

        return await axios
            .get(`${API_URL}/matches`, authHeader)
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
            type: GET_MATCHES_START
        };
    }

    function success(data) {
        return {
            type: GET_MATCHES_SUCCESS,
            payload: data
        };
    }

    function error(err) {
        return {
            type: GET_MATCHES_FAILURE,
            payload: err
        };
    }
}

export function getSpecificMatch(id) {
    return async (dispatch) => {
        await dispatch(request());

        return await axios
            .get(`${API_URL}/matches/${id}`, authHeader)
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
            type: GET_SPECIFIC_MATCH_START
        };
    }

    function success(data) {
        return {
            type: GET_SPECIFIC_MATCH_SUCCESS,
            payload: data
        };
    }

    function error(err) {
        return {
            type: GET_SPECIFIC_MATCH_FAILURE,
            payload: err
        };
    }
}

export function createMatch(matchData) {
    return async (dispatch) => {
        await dispatch(request());

        return await axios
            .post(`${API_URL}/matches`, matchData, authHeader)
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
            type: CREATE_MATCH_START
        };
    }

    function success(data) {
        return {
            type: CREATE_MATCH_SUCCESS,
            payload: data
        };
    }

    function error(err) {
        return {
            type: CREATE_MATCH_FAILURE,
            payload: err
        };
    }
}

export function updateMatch(id, matchData) {
    return async (dispatch) => {
        await dispatch(request());

        return await axios
            .put(`${API_URL}/matches/${id}`, matchData, authHeader)
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
            type: UPDATE_MATCH_START
        };
    }

    function success(data) {
        return {
            type: UPDATE_MATCH_SUCCESS,
            payload: data
        };
    }

    function error(err) {
        return {
            type: UPDATE_MATCH_FAILURE,
            payload: err
        };
    }
}

export function deleteMatch(id) {
    return async (dispatch) => {
        await dispatch(request());

        return await axios
            .delete(`${API_URL}/matches/${id}`, authHeader)
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
            type: DELETE_MATCH_START
        };
    }

    function success(data) {
        return {
            type: DELETE_MATCH_SUCCESS,
            payload: data
        };
    }

    function error(err) {
        return {
            type: DELETE_MATCH_FAILURE,
            payload: err
        };
    }
}

export function removeMatch(id) {
    return async (dispatch) => {
        await dispatch(request());

        return await axios
            .delete(`${API_URL}/matches/${id}/remove`, authHeader)
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
            type: REMOVE_MATCH_START
        };
    }

    function success(data) {
        return {
            type: REMOVE_MATCH_SUCCESS,
            payload: data
        };
    }

    function error(err) {
        return {
            type: REMOVE_MATCH_FAILURE,
            payload: err
        };
    }
}
