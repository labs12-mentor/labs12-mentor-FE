import {
    FETCH_FILE_START,
    FETCH_FILE_SUCCESS,
    FETCH_FILE_FAILURE,
    UPLOAD_AVATAR_START,
    UPLOAD_AVATAR_SUCCESS,
    UPLOAD_AVATAR_FAILURE,
    UPLOAD_LOGO_START,
    UPLOAD_LOGO_SUCCESS,
    UPLOAD_LOGO_FAILURE
} from '../constants/actionTypes';

const initialState = {
    isFetching: false,
    currentFile: null,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FILE_START:
            return {
                ...state,
                isFetching: true
            };

        case FETCH_FILE_SUCCESS:
            return {
                ...state,
                isFetching: false
            };

        case FETCH_FILE_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case UPLOAD_AVATAR_START:
            return {
                ...state,
                isFetching: true
            };

        case UPLOAD_AVATAR_SUCCESS:
            return {
                ...state,
                isFetching: false,
                currentFile: action.payload
            };

        case UPLOAD_AVATAR_FAILURE:
            return {
                ...state,
                isFetching: false,
                currentFile: null,
                error: action.payload
            };

        case UPLOAD_LOGO_START:
            return {
                ...state,
                isFetching: true
            };
    
        case UPLOAD_LOGO_SUCCESS:
            return {
                ...state,
                isFetching: false,
                currentFile: action.payload
            };

        case UPLOAD_LOGO_FAILURE:
            return {
                ...state,
                isFetching: false,
                currentFile: null,
                error: action.payload
            };

        default:
            return state;
    }
};
