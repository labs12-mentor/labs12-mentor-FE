import { combineReducers } from 'redux';
import meetingsReducer from './meetings';

import auth from './auth';

export default combineReducers({
    auth,
    meetingsReducer,
});