import axios from 'axios';
import {
    GET_ORGANIZATION_START,
    GET_ORGANIZATION_SUCCESS,
    GET_ORGANIZATION_FAILURE,
    CREATE_ORGANIZATION_START,
    CREATE_ORGANIZATION_SUCCESS,
    CREATE_ORGANIZATION_FAILURE,
    UPDATE_ORGANIZATION_START,
    UPDATE_ORGANIZATION_SUCCESS,
    UPDATE_ORGANIZATION_FAILURE,
    DELETE_ORGANIZATION_START,
    DELETE_ORGANIZATION_SUCCESS,
    DELETE_ORGANIZATION_FAILURE
} from '../constants/actionTypes';

const url = 'https://labs12-backend-dev.herokuapp.com';

export const getOrganization = () => dispatch => {
    dispatch({ type: GET_ORGANIZATION_START });
    return axios    
        .get(`${url}/api/auth/register`)
        .then(res => {
            dispatch({ type: GET_ORGANIZATION_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: GET_ORGANIZATION_FAILURE, payload: err })
        });
};

export const createOrganization = newOrg => dispatch => {
    dispatch({ type: CREATE_ORGANIZATION_START });
    return axios    
        .post(`${url}/api/auth/register`, newOrg)
        .then(res => {
            dispatch({ type: CREATE_ORGANIZATION_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: CREATE_ORGANIZATION_FAILURE, payload: err })
        });
};

export const updateOrganization = (id, updatedOrg) => dispatch => {
    dispatch({ type: UPDATE_ORGANIZATION_START });
    
    return axios    
        .put(`${url}orgs/${id}`, updatedOrg)
        .then(res => {
            dispatch({ type: UPDATE_ORGANIZATION_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: UPDATE_ORGANIZATION_FAILURE, payload: err })
        });
};

export const deleteOrganization = id => dispatch => {
    dispatch({ type: DELETE_ORGANIZATION_START });
    
    return axios    
        .delete(`${url}orgs/${id}`)
        .then(res => {
            dispatch({ type: DELETE_ORGANIZATION_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: DELETE_ORGANIZATION_FAILURE, payload: err })
        });
};