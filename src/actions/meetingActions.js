import axios from "axios";

//backend  meetings url
const url = "http://mentorbe.tfolbrecht.com/";

export const GET_MEETINGS_START = "GET_MEETINGS_START";
export const GET_MEETINGS_SUCCESS = "GET_MEETINGS_SUCCESS";
export const GET_MEETINGS_FAILURE = "GET_MEETINGS_FAILURE";

export const getMeetings = () => dispatch => {
  dispatch({ type: GET_MEETINGS_START });
  return axios
    .get(url)
    .then(res => {
      console.log(res);
      dispatch({ type: GET_MEETINGS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_MEETINGS_FAILURE, payload: err });
    });
};

export const CREATE_MEETING_START = "CREATE_MEETING_START";
export const CREATE_MEETING_SUCCESS = "CREATE_MEETING_SUCCESS";
export const CREATE_MEETING_FAILURE = "CREATE_MEETING_FAILURE";

export const createMeeting = info => dispatch => {
  dispatch({ type: CREATE_MEETING_START });
  return axios
    .post(url, info)
    .then(res => {
      console.log(res);
      dispatch({ type: CREATE_MEETING_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: CREATE_MEETING_FAILURE, payload: err });
    });
};

export const UPDATE_MEETING_START = "UPDATE_MEETING_START";
export const UPDATE_MEETING_SUCCESS = "UPDATE_MEETING_SUCCESS";
export const UPDATE_MEETING_FAILURE = "UPDATE_MEETING_FAILURE";

export const updateMeeting = info => dispatch => {
  dispatch({ type: UPDATE_MEETING_START });
  return axios
    .put(url, info)
    .then(res => {
      console.log(res);
      dispatch({ type: UPDATE_MEETING_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: UPDATE_MEETING_FAILURE, payload: err });
    });
};

export const DELETE_MEETING_START = "DELETE_MEETING_START";
export const DELETE_MEETING_SUCCESS = "DELETE_MEETING_SUCCESS";
export const DELETE_MEETING_FAILURE = "DELETE_MEETING_FAILURE";

export const deleteMeeting = id => dispatch => {
  dispatch({ type: DELETE_MEETING_START });
  return axios
    .delete(`${url}/meetings/${id}`)
    .then(res => {
      console.log(res);
      dispatch({ type: DELETE_MEETING_SUCCESS, payload: id });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: DELETE_MEETING_FAILURE, payload: err });
    });
};
