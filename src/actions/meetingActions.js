import axios from "axios";
import {
  GET_MEETINGS_START,
  GET_MEETINGS_SUCCESS,
  GET_MEETINGS_FAILURE,
  GET_SPECIFIC_MEETING_START,
  GET_SPECIFIC_MEETING_FAILURE,
  GET_SPECIFIC_MEETING_SUCCESS,
  CREATE_MEETING_START,
  CREATE_MEETING_SUCCESS,
  CREATE_MEETING_FAILURE,
  UPDATE_MEETING_START,
  UPDATE_MEETING_SUCCESS,
  UPDATE_MEETING_FAILURE,
  DELETE_MEETING_START,
  DELETE_MEETING_SUCCESS,
  DELETE_MEETING_FAILURE,
  REMOVE_MEETING_START,
  REMOVE_MEETING_SUCCESS,
  REMOVE_MEETING_FAILURE
} from "../constants/actionTypes.js";

//backend meetings url
const url = "https://labs12-backend-dev.herokuapp.com/api/";

const credentials = {
  headers: {
    Authorization: localStorage.getItem("Authorization")
  }
};

export const getMeetings = () => dispatch => {
  dispatch({ type: GET_MEETINGS_START });
  return axios
    .get(`${url}/meetings`, credentials)
    .then(res => {
      //console.log(res);

      dispatch({ type: GET_MEETINGS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_MEETINGS_FAILURE, payload: err });
    });
};

export const getSpecificMeeting = id => dispatch => {
  dispatch({ type: GET_SPECIFIC_MEETING_START });
  return axios
    .get(`${url}/meetings/${id}`, credentials)
    .then(res => {
      //console.log(res);
      localStorage.getItem("token");
      dispatch({ type: GET_SPECIFIC_MEETING_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_SPECIFIC_MEETING_FAILURE, payload: err });
    });
};

export const createMeeting = info => dispatch => {
  dispatch({ type: CREATE_MEETING_START });
  return axios
    .post(`${url}/meetings`, info, credentials)
    .then(res => {
      //console.log(res);
      localStorage.getItem("token");
      dispatch({ type: CREATE_MEETING_SUCCESS, payload: res.data });
    })
    .catch(err => {
      //console.log(err);
      dispatch({ type: CREATE_MEETING_FAILURE, payload: err });
    });
};

export const updateMeeting = (id, info) => dispatch => {
  dispatch({ type: UPDATE_MEETING_START });
  return axios
    .put(`${url}/meetings/${id}`, info, credentials)
    .then(res => {
      //console.log(res);
      localStorage.getItem("token");
      dispatch({ type: UPDATE_MEETING_SUCCESS, payload: res.data });
    })
    .catch(err => {
      //console.log(err);
      dispatch({ type: UPDATE_MEETING_FAILURE, payload: err });
    });
};

export const deleteMeeting = id => dispatch => {
  dispatch({ type: DELETE_MEETING_START });
  return axios
    .delete(`${url}/meetings/${id}`, credentials)
    .then(res => {
      //console.log(res);
      dispatch({ type: DELETE_MEETING_SUCCESS, payload: id });
    })
    .catch(err => {
      //console.log(err);
      dispatch({ type: DELETE_MEETING_FAILURE, payload: err });
    });
};

export const removeMeeting = id => dispatch => {
  dispatch({ type: REMOVE_MEETING_START });
  return axios
    .delete(`${url}/meetings/${id}/remove`, credentials)
    .then(res => {
      dispatch({ type: REMOVE_MEETING_SUCCESS, payload: id });
    })
    .catch(err => {
      dispatch({ type: REMOVE_MEETING_FAILURE, payload: err });
    });
};
