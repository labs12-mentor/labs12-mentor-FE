import axios from "axios";
import {
  GET_NOTIFICATIONS_START,
  GET_NOTIFICATIONS_SUCCESS,
  GET_NOTIFICATIONS_FAILURE,
  GET_SPECIFIC_NOTIFICATION_START,
  GET_SPECIFIC_NOTIFICATION_SUCCESS,
  GET_SPECIFIC_NOTIFICATION_FAILURE,
  CREATE_NOTIFICATION_START,
  CREATE_NOTIFICATION_SUCCESS,
  CREATE_NOTIFICATION_FAILURE,
  UPDATE_NOTIFICATION_START,
  UPDATE_NOTIFICATION_SUCCESS,
  UPDATE_NOTIFICATION_FAILURE,
  DELETE_NOTIFICATION_START,
  DELETE_NOTIFICATION_SUCCESS,
  DELETE_NOTIFICATION_FAILURE
} from "../constants/actionTypes.js";

//backend meetings url
const url = "https://labs12-backend-dev.herokuapp.com/api";

export const getNotifications = () => dispatch => {
  dispatch({ type: GET_NOTIFICATIONS_START });
  return axios
    .get(`${url}/notifications`)
    .then(res => {
      //console.log(res);
      dispatch({ type: GET_NOTIFICATIONS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_NOTIFICATIONS_FAILURE, payload: err });
    });
};

export const getSpecificNotification = id => dispatch => {
  dispatch({ type: GET_SPECIFIC_NOTIFICATION_START });
  return axios
    .get(`${url}/notifications/${id}`)
    .then(res => {
      dispatch({ type: GET_SPECIFIC_NOTIFICATION_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_SPECIFIC_NOTIFICATION_FAILURE, payload: err });
    });
};

export const createNotification = () => dispatch => {
  dispatch({ type: CREATE_NOTIFICATION_START });
  return axios
    .post(`${url}/notifications/${id}`)
    .then(res => {
      dispatch({ type: CREATE_NOTIFICATION_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: CREATE_NOTIFICATION_FAILURE, payload: err });
    });
};

export const updateNotification = (id, info) => dispatch => {
  dispatch({ type: UPDATE_NOTIFICATION_START });
  return axios
    .put(`${url}/notifications/${id}`, info)
    .then(res => {
      dispatch({ type: UPDATE_NOTIFICATION_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: UPDATE_NOTIFICATION_FAILURE, payload: err });
    });
};

export const deleteNotification = id => dispatch => {
  dispatch({ type: DELETE_NOTIFICATION_START });
  return axios
    .delete(`${url}/notifications/${id}`)
    .then(res => {
      dispatch({ type: DELETE_NOTIFICATION_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: DELETE_NOTIFICATION_FAILURE, payload: err });
    });
};
