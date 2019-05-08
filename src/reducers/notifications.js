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
    MARK_NOTIFICATION_START,
    MARK_NOTIFICATION_SUCCESS,
    MARK_NOTIFICATION_FAILURE,
    DELETE_NOTIFICATION_START,
    DELETE_NOTIFICATION_SUCCESS,
    DELETE_NOTIFICATION_FAILURE,
    REMOVE_NOTIFICATION_START,
    REMOVE_NOTIFICATION_SUCCESS,
    REMOVE_NOTIFICATION_FAILURE
} from '../constants/actionTypes';

const initialState = {
    error: null,
    notificationList: [],
    notificationCount: 0,
    gettingNotification: false,
    creatingNotification: false,
    updatingNotification: false,
    markingNotification: false,
    deletingNotification: false,
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_NOTIFICATIONS_START:
            return {
                ...state,
                gettingNotification: true
            };

        case GET_NOTIFICATIONS_SUCCESS:
            return {
                ...state,
                gettingNotifcation: false,
                notificationList: action.payload,
                notificationCount: action.payload.length,
            };

        case GET_NOTIFICATIONS_FAILURE:
            return {
                ...state,
                gettingNotification: false,
                error: action.payload
            };

        case GET_SPECIFIC_NOTIFICATION_START:
            return {
                ...state,
                gettingNotifcation: true
            };

        case GET_SPECIFIC_NOTIFICATION_SUCCESS:
            return {
                ...state,
                gettingNotifcation: false,
                notificationList: action.payload
            };

        case GET_SPECIFIC_NOTIFICATION_FAILURE:
            return {
                ...state,
                gettingNotifcation: false,
                error: action.payload
            };

        case CREATE_NOTIFICATION_START:
            return {
                ...state,
                creatingNotification: true
            };

        case CREATE_NOTIFICATION_SUCCESS:
            return {
                ...state,
                creatingNotification: false,
                notificationList: [...state.notificationList, action.payload]
            };

        case CREATE_NOTIFICATION_FAILURE:
            return {
                ...state,
                creatingNotification: false,
                error: action.payload
            };

        case UPDATE_NOTIFICATION_START:
            return {
                ...state,
                updatingNotification: true
            };

        case UPDATE_NOTIFICATION_SUCCESS:
            return {
                ...state,
                updatingNotification: false,
                notificationList: [...state.notificationList, action.payload]
            };

        case UPDATE_NOTIFICATION_FAILURE:
            return {
                ...state,
                updatingNotification: false,
                error: action.payload
            };
        
        case MARK_NOTIFICATION_START:
            return {
                ...state,
                markingNotification: true,
            };
        case MARK_NOTIFICATION_SUCCESS:
            return {
                ...state,
                markingNotification: false,
                notificationList: [...state.notificationList, action.payload],
            };
        case MARK_NOTIFICATION_FAILURE:
            return {
                ...state,
                markingNotification: false,
                error: action.payload
            }

        case DELETE_NOTIFICATION_START:
            return {
                ...state,
                deleteNotification: true
            };

        case DELETE_NOTIFICATION_SUCCESS:
            return {
                ...state,
                deleteNotification: false
            };

        case DELETE_NOTIFICATION_FAILURE:
            return {
                ...state,
                deleteNotification: false,
                error: action.payload
            };

        default: {
            return state;
        }
    }
}