import axios from 'axios';
import {
    CREATE_USER_START,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILURE,
    LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE
} from '../constants/actionTypes';

const url = 'http://mentorbe.tfolbrecht.com/';

export const registerUser = newUser => dispatch => {
    dispatch({ type: CREATE_USER_START });

    return axios
        .post(url, newUser)
        .then(res => {
            dispatch({ type: CREATE_USER_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: CREATE_USER_FAILURE, payload: err });
        });
};


export const loginUser = credentials => {
    dispatch({ type: LOGIN_USER_START });

    return axios
        .post(url, credentials)
        .then(res => {
            dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: LOGIN_USER_FAILURE, payload: err });
        })
}