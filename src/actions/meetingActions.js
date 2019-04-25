import axios from "axios";

//backend url
const url = "http://mentorbe.tfolbrecht.com/";

export const GET_MEETINGS_START = "CREATE_MEETINGS_START";
export const GET_MEETINGS_SUCCESS = "CREATE_MEETINGS_SUCCESS";
export const GET_MEETINGS_FAILURE = "CREATE_MEETINGS_FAILURE";

export const getMeetings = () => dispatch => {
  dispatch({ type: GET_MEETINGS_START });
  return axios
    .get(url, {})
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
      console.log(err.response.data);
    });
};
