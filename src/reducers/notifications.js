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
    notifications: [],
    isFetching: false,
    currentNotification: null,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_NOTIFICATIONS_START:
            return {
                ...state,
                isFetching: true
            };

        case GET_NOTIFICATIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                notifications: action.payload.sort((a, b) => {
                    if (a.id < b.id) return -1;
                    if (a.id > b.id) return 1;
                    return 0;
                })
            };

        case GET_NOTIFICATIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case GET_SPECIFIC_NOTIFICATION_START:
            return {
                ...state,
                isFetching: true
            };

        case GET_SPECIFIC_NOTIFICATION_SUCCESS:
            return {
                ...state,
                isFetching: false,
                currentNotification: action.payload
            };

        case GET_SPECIFIC_NOTIFICATION_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case CREATE_NOTIFICATION_START:
            return {
                ...state,
                isFetching: true
            };

        case CREATE_NOTIFICATION_SUCCESS:
            return {
                ...state,
                isFetching: false,
                notifications: [...state.notifications, action.payload]
            };

        case CREATE_NOTIFICATION_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case UPDATE_NOTIFICATION_START:
            return {
                ...state,
                isFetching: true
            };

        case UPDATE_NOTIFICATION_SUCCESS:
            return {
                ...state,
                isFetching: false,
                notifications: [...state.notifications.filter(elem => elem.id !== action.payload.id), action.payload].sort((a, b) => {
                    if (a.id < b.id) return -1;
                    if (a.id > b.id) return 1;
                    return 0;
                })
            };

        case UPDATE_NOTIFICATION_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        
        case MARK_NOTIFICATION_START:
            return {
                ...state,
                isFetching: true,
            };
        case MARK_NOTIFICATION_SUCCESS:
            return {
                ...state,
                isFetching: false,
                notifications: [...state.notifications.filter(elem => elem.id !== action.payload.id), action.payload].sort((a, b) => {
                    if (a.id < b.id) return -1;
                    if (a.id > b.id) return 1;
                    return 0;
                })
            };
        case MARK_NOTIFICATION_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }

        case DELETE_NOTIFICATION_START:
            return {
                ...state,
                isFetching: true
            };

        case DELETE_NOTIFICATION_SUCCESS:
            return {
                ...state,
                isFetching: false,
                notifications: state.notifications.filter(elem => elem.id !== action.payload)
            };

        case DELETE_NOTIFICATION_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        
        case REMOVE_NOTIFICATION_START:
            return {
                ...state,
                isFetching: true
            };

        case REMOVE_NOTIFICATION_SUCCESS:
            return {
                ...state,
                isFetching: false,
                notifications: state.notifications.filter(elem => elem.id !== action.payload)
            };

        case REMOVE_NOTIFICATION_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        default: {
            return state;
        }
    }
}