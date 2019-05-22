import {
    CONTACT_FORM_SEND_EMAIL_START,
    CONTACT_FORM_SEND_EMAIL_SUCCESS,
    CONTACT_FORM_SEND_EMAIL_FAILURE
} from '../constants/actionTypes';

const initialState = {
    isFetching: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CONTACT_FORM_SEND_EMAIL_START:
            return {
                ...state,
                isFetching: true
            };

        case CONTACT_FORM_SEND_EMAIL_SUCCESS:
            return {
                ...state,
                isFetching: false
            };

        case CONTACT_FORM_SEND_EMAIL_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        default:
            return state;
    }
};
