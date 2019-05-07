import {
  GET_MENTORS_START,
  GET_MENTORS_SUCCESS,
  GET_MENTORS_FAILURE,
  GET_SPECIFIC_MENTOR_START,
  GET_SPECIFIC_MENTOR_SUCCESS,
  GET_SPECIFIC_MENTOR_FAILURE,
  CREATE_MENTOR_START,
  CREATE_MENTOR_SUCCESS,
  CREATE_MENTOR_FAILURE,
  UPDATE_MENTOR_START,
  UPDATE_MENTOR_SUCCESS,
  UPDATE_MENTOR_FAILURE,
  DELETE_MENTOR_START,
  DELETE_MENTOR_SUCCESS,
  DELETE_MENTOR_FAILURE,
  REMOVE_MENTOR_START,
  REMOVE_MENTOR_SUCCESS,
  REMOVE_MENTOR_FAILURE
} from "../constants/actionTypes";

const initialState = {
  error: null,
  mentorsList: [],
  gettingMentors: false,
  creatingMentor: false,
  deletingMentor: false,
  updatingMentor: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MENTORS_START:
      return {
        ...state,
        gettingMentors: true
      };

    case GET_MENTORS_SUCCESS:
      return {
        ...state,
        gettingMentors: false,
        mentorsList: action.payload
      };

    case GET_MENTORS_FAILURE:
      return {
        ...state,
        gettingMentors: false,
        error: action.payload
      };

    case GET_SPECIFIC_MENTOR_START:
      return {
        ...state,
        gettingMentors: true
      };

    case GET_SPECIFIC_MENTOR_SUCCESS:
      return {
        ...state,
        gettingMentors: false,
        mentorsList: action.payload
      };

    case GET_SPECIFIC_MENTOR_FAILURE:
      return {
        ...state,
        gettingMentors: false,
        error: action.payload
      };

    case CREATE_MENTOR_START:
      return {
        ...state,
        creatingMentor: true
      };

    case CREATE_MENTOR_SUCCESS:
      return {
        ...state,
        creatingMentor: false,
        mentorsList: [...state.mentorsList, action.payload]
      };

    case CREATE_MENTOR_FAILURE:
      return {
        ...state,
        creatingMentor: false,
        error: action.payload
      };

    case UPDATE_MENTOR_START:
      return {
        ...state,
        updatingMentor: true
      };

    case UPDATE_MENTOR_SUCCESS:
      return {
        ...state,
        updatingMentor: false,
        mentorsList: [...state.mentorsList, action.payload]
      };

    case UPDATE_MENTOR_FAILURE:
      return {
        ...state,
        updatingMentors: false,
        error: action.payload
      };

    case DELETE_MENTOR_START:
      return {
        ...state,
        deletingMentor: true
      };

    case DELETE_MENTOR_SUCCESS:
      return {
        ...state,
        deletingMentor: false
      };

    case DELETE_MENTOR_FAILURE:
      return {
        ...state,
        deletingMentor: false,
        error: action.payload
      };

    case REMOVE_MENTOR_START:
      return {
        ...state,
        deletingMentors: true
      };

    case REMOVE_MENTOR_SUCCESS:
      return {
        ...state,
        deletingMentors: false
      };

    case REMOVE_MENTOR_FAILURE:
      return {
        ...state,
        deletingMentors: false,
        error: action.payload
      };

    default: {
      return state;
    }
  }
};
