import { combineReducers } from 'redux';

import auth from './auth';
import contact from './contact';
import experiences from './experiences';
import files from './files';
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
    contact,
    experiences,
    files,
    invitations,
    matches,
    meetings,
    mentees,
    mentors,
    notifications,
    organizations,
    users
});
