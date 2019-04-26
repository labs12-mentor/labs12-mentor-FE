import axios from 'axios';
import {
    GET_ORGANIZATION_FAILURE,
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

const url = 'http://mentorbe.tfolbrecht.com/';

export const getOrganization = () => dispatch => {
    dispatch({ type: GET_ORGANIZATION_START });

    return axios    
        .get(url)
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
        .post(url, newOrg)
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
            dispatch({ type: GET_ORGANIZATION_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: GET_ORGANIZATION_FAILURE, payload: err })
        });
};