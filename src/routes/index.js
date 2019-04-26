import React from 'react';
import { 
    Router, 
    Route 
} from 'react-router-dom';

import OrganizationRegister from '../pages/OrganizationRegister';
import userRegister from '../pages/UserRegistration';
import userLogin from '../pages/UserLogin';
import MeetingsPage from '../pages/MeetingsPage.js'

const Routes = (props) => {
    return (
        <Router history={props.history}>
            <Route exact path="/organization/register" component={OrganizationRegister} />
            <Route exact path="/user/register" component={userRegister} />
            <Route exact path="/user/login" component={userLogin} />
            <Route exact path="/meetings" component={MeetingsPage}/>
        </Router>
    )
}

export default Routes;