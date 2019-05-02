import axios from "axios";
import {
  GET_NOTIFCATIONS_START,
  GET_NOTIFICATIONS_SUCCESS,
  GET_NOTIFICATIONS_FAILURE,
  GET_SPECIFIC_NOTIFICATION_START,
  GET_SPECIFIC_NOTIFICATION_SUCCESS,
  GET_SPECIFIC_NOTIFICATION_FAILURE,
  UPDATE_NOTIFICATION_START,
  UPDATE_NOTIFICATION_SUCCESS,
  UPDATE_NOTIFICATION_FAILURE,
  DELETE_NOTIFICATION_START,
  DELETE_NOTIFICATION_SUCCESS,
  DELETE_NOTIFICATION_FAILURE
} from "../constants/actionTypes.js";

//backend meetings url
const url = "http://mentorbe.tfolbrecht.com";

export const getNotifications = () => dispatch => {
    dispatch({ type: GET_NOTIFICATIONS_START });
    return axios
      .get(`${url}/notifications`)
      .then(res => {
        //console.log(res);
        dispatch({ type: GET_NOTIFICATION_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: GET_NOTIFICATION_FAILURE, payload: err });
      });
  };