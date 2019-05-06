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
  DELETE_EXPERIENCE_FAILURE,
  CREATE_EXPERIENCE_START,
  CREATE_EXPERIENCE_SUCCESS,
  CREATE_EXPERIENCE_FAILURE
} from "../constants/actionTypes.js";

//backend meetings url rem
const url = "https://labs12-backend-dev.herokuapp.com/api/";

const credentials = {
  headers: {
    Authorization: localStorage.getItem("Authorization")
  }
};

export const getExperiences = () => dispatch => {
  dispatch({ type: GET_EXPERIENCES_START });
  return axios
    .get(`${url}/experiences`, credentials)
    .then(res => {
      //console.log(res);
      dispatch({ type: GET_EXPERIENCES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_EXPERIENCES_FAILURE, payload: err });
    });
};

export const getSpecificExperience = id => dispatch => {
  dispatch({ type: GET_SPECIFIC_EXPERIENCE_START });
  return axios
    .get(`${url}/experiences/${id}`, credentials)
    .then(res => {
      dispatch({ type: GET_SPECIFIC_EXPERIENCE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_SPECIFIC_EXPERIENCE_FAILURE, payload: err });
    });
};

export const createExperience = () => dispatch => {
  dispatch({ type: CREATE_EXPERIENCE_START });
  return axios
    .post(`${url}/experiences`, credentials)
    .then(res => {
      dispatch({ type: CREATE_EXPERIENCE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: CREATE_EXPERIENCE_FAILURE, payload: err });
    });
};

export const updateExperience = (id, info) => dispatch => {
  dispatch({ type: UPDATE_EXPERIENCE_START });
  return axios
    .put(`${url}/experiences/${id}`, info, credentials)
    .then(res => {
      dispatch({ type: UPDATE_EXPERIENCE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: UPDATE_EXPERIENCE_FAILURE, payload: err });
    });
};

export const deleteExperience = id => dispatch => {
  dispatch({ type: DELETE_EXPERIENCE_START });
  return axios
    .delete(`${url}/experiences/${id}`, credentials)
    .then(res => {
      dispatch({ type: DELETE_EXPERIENCE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: DELETE_EXPERIENCE_FAILURE, payload: err });
    });
};
