import {
    GET_INVITATIONS_START,
    GET_INVITATIONS_SUCCESS,
    GET_INVITATIONS_FAILURE,
    GET_SPECIFIC_INVITATION_START,
    GET_SPECIFIC_INVITATION_SUCCESS,
    GET_SPECIFIC_INVITATION_FAILURE,
    DELETE_INVITATION_START,
    DELETE_INVITATION_SUCCESS,
    DELETE_INVITATION_FAILURE,
    CREATE_INVITATION_START,
    CREATE_INVITATION_SUCCESS,
    CREATE_INVITATION_FAILURE,
    REMOVE_INVITATION_START,
    REMOVE_INVITATION_SUCCESS,
    REMOVE_INVITATION_FAILURE
} from '../constants/actionTypes';
import axios from 'axios';
import { API_URL } from '../constants/config';

const authHeader = {
    headers: {
        Authorization: localStorage.getItem('Authorization')
    }
};

export function getInvitations() {
    return async (dispatch) => {
        await dispatch(request());

        return await axios
            .get(`${API_URL}/invitations`, authHeader)
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
            type: GET_INVITATIONS_START
        };
    }

    function success(data) {
        return {
            type: GET_INVITATIONS_SUCCESS,
            payload: data
        };
    }

    function error(err) {
        return {
            type: GET_INVITATIONS_FAILURE,
            payload: err
        };
    }
}

export function getSpecificInvitation(id) {
    return async (dispatch) => {
        await dispatch(request());

        return await axios
            .get(`${API_URL}/invitations/${id}`, authHeader)
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
            type: GET_SPECIFIC_INVITATION_START
        };
    }

    function success(data) {
        return {
            type: GET_SPECIFIC_INVITATION_SUCCESS,
            payload: data
        };
    }

    function error(err) {
        return {
            type: GET_SPECIFIC_INVITATION_FAILURE,
            payload: err
        };
    }
}

export function createInvitation(invitationData) {
    return async (dispatch) => {
        await dispatch(request());

        return await axios
            .post(`${API_URL}/invitations`, invitationData, authHeader)
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
            type: CREATE_INVITATION_START
        };
    }

    function success(data) {
        return {
            type: CREATE_INVITATION_SUCCESS,
            payload: data
        };
    }

    function error(err) {
        return {
            type: CREATE_INVITATION_FAILURE,
            payload: err
        };
    }
}

export function deleteInvitation(id) {
    return async (dispatch) => {
        await dispatch(request());

        return await axios
            .delete(`${API_URL}/invitations/${id}`, authHeader)
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
            type: DELETE_INVITATION_START
        };
    }

    function success(data) {
        return {
            type: DELETE_INVITATION_SUCCESS,
            payload: data
        };
    }

    function error(err) {
        return {
            type: DELETE_INVITATION_FAILURE,
            payload: err
        };
    }
}

export function removeInvitation(id) {
    return async (dispatch) => {
        await dispatch(request());

        return await axios
            .delete(`${API_URL}/invitations/${id}/remove`, authHeader)
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
            type: REMOVE_INVITATION_START
        };
    }

    function success(data) {
        return {
            type: REMOVE_INVITATION_SUCCESS,
            payload: data
        };
    }

    function error(err) {
        return {
            type: REMOVE_INVITATION_FAILURE,
            payload: err
        };
    }
}
