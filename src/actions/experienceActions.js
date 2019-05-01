import axios from "axios";
import {
GET_EXPERIENCES_START,
GET_EXPERIENCES_SUCCESS,
GET_EXPERIENCES_FAILURE,
GET_SPECIFIC_EXPERIENCE_START,
GET_SPECIFIC_EXPERIENCE_SUCCESS,
GET_SPECIFIC_EXPERIENCE_FAILURE,
UPDATE_EXPERIENCE_START,
UPDATE_EXPERIENCE_SUCCESS,
UPDATE_EXPERIENCE_FAILURE,
DELETE_EXPERIENCE_START,
DELETE_EXPERIENCE_SUCCESS,
DELETE_EXPERIENCE_FAILURE
} from "../constants/actionTypes.js";

//backend meetings url
const url = "http://mentorbe.tfolbrecht.com";

export const getExperiences = () => dispatch => {
    dispatch({ type: GET_EXPERIENCES_START });
    return axios
      .get(`${url}/experiences`)
      .then(res => {
        //console.log(res);
        dispatch({ type: GET_EXPERIENCES_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: GET_EXPERIENCES_FAILURE, payload: err });
      });
  };

export const getSpecificExperience = id => dispatch => {
    dispatch({type: GET_SPECIFIC_EXPERIENCE_START});
    return axios
    .get(`${url}/experiences/${id}`)
    .then(res => {
        dispatch({type: GET_SPECIFIC_EXPERIENCE_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatch({type: GET_SPECIFIC_EXPERIENCE_FAILURE, payload: err})
    });
}

export const updateExperience = (id, info) => dispatch => {
    dispatch({type: UPDATE_EXPERIENCE_START})
    return axios
    .put(`{url}/experiences/${id}`, info)
    .then(res => {
        dispatch({type: UPDATE_EXPERIENCE_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({type: UPDATE_EXPERIENCE_FAILURE, payload: err})
    })
}


export const deleteExperience = id => dispatch => {
    dispatch({type: DELETE_EXPERIENCE_START})
    return axios
    .delete(`${url}/experiences/${id}`)
    .then(res => {
        dispatch({type: DELETE_EXPERIENCE_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({type: DELETE_EXPERIENCE_FAILURE, payload: err})
    })
}
