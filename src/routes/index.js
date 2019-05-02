import React from 'react';
import { 
    Router, 
    Route 
} from 'react-router-dom';

import OrganizationRegister from '../pages/OrganizationRegister';
import userRegister from '../pages/UserRegistration';
import userLogin from '../pages/UserLogin';
import Meetingspage from '../pages/MeetingsPage';
import UserSettingsPage from '../pages/UserSettingsPage';

const Routes = (props) => {
    return (
        <Router history={props.history}>
            <Route exact path="/organization/register" component={OrganizationRegister} />
            <Route exact path="/user/register" component={userRegister} />
            <Route exact path="/user/login" component={userLogin} />
            <Route exact path="/meetings" component={Meetingspage} />
            <Route exact path="/user/settings" component={UserSettingsPage} />
        </Router>
    )
}

export default Routes;