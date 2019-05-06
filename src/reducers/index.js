import { combineReducers } from 'redux';
import meetingsReducer from './meetings';
import experienceReducer from './experiences';
import menteesReducer from './mentees';

import auth from './auth';

export default combineReducers({
    auth,
    meetingsReducer,
    experienceReducer,
    menteesReducer
});