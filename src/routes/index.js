import React from 'react';
import { 
    Router, 
    Route 
} from 'react-router-dom';

import OrganizationRegister from '../pages/OrganizationRegister';
import UserRegister from '../pages/UserRegistration';
import UserLogin from '../pages/UserLogin';
import StudentProfile from '../pages/StudentProfile';
import AdminPanel from '../pages/AdminPanel/AdminPanel';
import Application from '../pages/AdminPanel/Application/Application';
import Assignment from '../pages/AdminPanel/Assignment/Assignment';
import HomePage from '../pages/HomePage';

const Routes = (props) => {
    return (
        <Router history={props.history}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/organization/register" component={OrganizationRegister} />
            <Route exact path="/user/register" component={UserRegister} />
            <Route exact path="/user/login" component={UserLogin} />
            <Route exact path="/user/student/profile" component={StudentProfile} />
            <Route exact path="/user/admin/profile" component={AdminPanel} />
            <Route exact path="/user/mentorapplication" component={Application} />
            <Route exact path="/user/mentorassignment" component={Assignment} />
        </Router>
    );
}

export default Routes;