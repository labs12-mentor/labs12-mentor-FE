import {
    GET_EXPERIENCES_START,
    GET_EXPERIENCES_SUCCESS,
    GET_EXPERIENCES_FAILURE,
    GET_SPECIFIC_EXPERIENCE_START,
    GET_SPECIFIC_EXPERIENCE_SUCCESS,
    GET_SPECIFIC_EXPERIENCE_FAILURE,
    CREATE_EXPERIENCE_START,
    CREATE_EXPERIENCE_SUCCESS,
    CREATE_EXPERIENCE_FAILURE,
    UPDATE_EXPERIENCE_START,
    UPDATE_EXPERIENCE_SUCCESS,
    UPDATE_EXPERIENCE_FAILURE,
    DELETE_EXPERIENCE_START,
    DELETE_EXPERIENCE_SUCCESS,
    DELETE_EXPERIENCE_FAILURE
} from '../constants/actionTypes';

const initialState = {
    error: null,
    experienceList: [],
    gettingExperiences: false,
    creatingExperience: false,
    deletingExperience: false,
    updatingExperience: false
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_EXPERIENCES_START:
            return {
                ...state,
                gettingExperiences: true
            };

        case GET_EXPERIENCES_SUCCESS:
            return {
                ...state,
                gettingExperiences: false,
                experienceList: action.payload
            };

        case GET_EXPERIENCES_FAILURE:
            return {
                ...state,
                gettingExperiences: false,
                error: action.payload
            };

        case GET_SPECIFIC_EXPERIENCE_START:
            return {
                ...state,
                gettingExperiences: true
            };

        case GET_SPECIFIC_EXPERIENCE_SUCCESS:
            return {
                ...state,
                gettingExperiences: false,
                experienceList: action.payload
            };

        case GET_SPECIFIC_EXPERIENCE_FAILURE:
            return {
                ...state,
                gettingExperiences: false,
                error: action.payload
            };

        case CREATE_EXPERIENCE_START:
            return {
                ...state,
                creatingExperience: true
            };

        case CREATE_EXPERIENCE_SUCCESS:
            return {
                ...state,
                creatingExperience: false,
                experienceList: [...state.experienceList, action.payload]
            };

        case CREATE_EXPERIENCE_FAILURE:
            return {
                ...state,
                createExperience: false,
                error: action.payload
            };

        case UPDATE_EXPERIENCE_START:
            return {
                ...state,
                updateExperience: true
            };

        case UPDATE_EXPERIENCE_SUCCESS:
            return {
                ...state,
                updateExperience: false,
                experienceList: [...state.experienceList, action.payload]
            };

        case UPDATE_EXPERIENCE_FAILURE:
            return {
                ...state,
                updateExperience: false,
                error: action.payload
            };

        case DELETE_EXPERIENCE_START:
            return {
                ...state,
                deleteExperience: true
            };

        case DELETE_EXPERIENCE_SUCCESS:
            return {
                ...state,
                deleteExperience: false
            };

        case DELETE_EXPERIENCE_FAILURE:
            return {
                ...state,
                deleteExperience: false,
                error: action.payload
            };
            
        default: {
            return state;
        }
    }
}