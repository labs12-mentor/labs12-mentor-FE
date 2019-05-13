import { combineReducers } from 'redux';

import auth from './auth';
import experiences from './experiences';
import invitations from './invitations';
import matches from './matches';
import meetings from './meetings';
import mentees from './mentees';
import mentors from './mentors';
import notifications from './notifications';
import organizations from './organizations';
import users from './users';

export default combineReducers({
    auth,
    experiences,
    invitations,
    matches,
    meetings,
    mentees,
    mentors,
    notifications,
    organizations,
    users
});
