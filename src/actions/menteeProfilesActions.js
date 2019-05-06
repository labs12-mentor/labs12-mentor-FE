import axios from 'axios';
import {
    GET_MENTEE_PROFILES_START,
    GET_MENTEE_PROFILES_SUCCESS,
    GET_MENTEE_PROFILES_FAILURE
} from '../constants/actionTypes';
import { dispatch } from 'rxjs/internal/observable/range';
import { Action } from 'rxjs/internal/scheduler/Action';

const url = "https://labs12-backend-dev.herokuapp.com/api";

export const fetchAllMentees = () => {
    dispatch({ type: GET_MENTEE_PROFILES_START });

    return axios
        .get(`${url}/mentees`)
        .then(res => {
            dispatch({ type: GET_MENTEE_PROFILES_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: GET_MENTEE_PROFILES_FAILURE, payload: errr });
        });
}