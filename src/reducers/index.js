import { combineReducers } from 'redux';
import meetingsReducer from './meetings';
import experienceReducer from './experiences'

import auth from './auth';

export default combineReducers({
    auth,
    meetingsReducer,
    experienceReducer
});