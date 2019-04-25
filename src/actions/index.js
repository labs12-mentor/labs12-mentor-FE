import axios from 'axios';

export const GET_ORGANIZATION_START = "GET_ORGANIZATION_START";
export const GET_ORGANIZATION_SUCCESS = "GET_ORGANIZATION_SUCCESS";
export const GET_ORGANIZATION_FAILURE = "GET_ORGANIZATION_FAILURE";

export const CREATE_ORGANIZATION_START = "GET_ORGANIZATION_START";
export const CREATE_ORGANIZATION_SUCCESS = "GET_ORGANIZATION_SUCCESS";
export const CREATE_ORGANIZATION_FAILURE = "GET_ORGANIZATION_FAILURE";

export const UPDATE_ORGANIZATION_START = "GET_ORGANIZATION_START";
export const UPDATE_ORGANIZATION_SUCCESS = "GET_ORGANIZATION_SUCCESS";
export const UPDATE_ORGANIZATION_FAILURE = "GET_ORGANIZATION_FAILURE";

export const DELETE_ORGANIZATION_START = "GET_ORGANIZATION_START";
export const DELETE_ORGANIZATION_SUCCESS = "GET_ORGANIZATION_SUCCESS";
export const DELETE_ORGANIZATION_FAILURE = "GET_ORGANIZATION_FAILURE";

const url = 'http://mentorbe.tfolbrecht.com/';

export const getOrganization = () => dispatch => {
    dispatch({ type: GET_ORGANIZATION_START });

    return axios    
        .get(url)
        .then(res => {
            dispatch({ type: GET_ORGANIZATION_SUCCESS });
        })
        .catch(err => {
            dispatch({ type: GET_ORGANIZATION_FAILURE })
        });
};

export const createOrganization = newOrg => dispatch => {
    dispatch({ type: CREATE_ORGANIZATION_START });
    
    return axios    
        .post(url, newOrg)
        .then(res => {
            dispatch({ type: CREATE_ORGANIZATION_SUCCESS });
        })
        .catch(err => {
            dispatch({ type: CREATE_ORGANIZATION_FAILURE })
        });
};

export const updateOrganization = () => dispatch => {

}

export const deleteOrganization = () => dispatch => {

}