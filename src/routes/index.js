import React from 'react';
import { 
    Router, 
    Route 
} from 'react-router-dom';

import OrganizationRegister from '../pages/OrganizationRegister';
import userRegister from '../pages/UserRegistration';
import userLogin from '../pages/UserLogin';
import StudentProfile from '../pages/StudentProfile';
import Notifications from '../pages/NotificationsView';
import AdminPanel from '../pages/AdminPanel/AdminPanel';
import NotificationButton from '../pages/NotificationButton';

const Routes = (props) => {
    return (
        <Router history={props.history}>
            <div>
                <header>
                    <NotificationButton />
                </header>
            </div>
            <Route exact path="/organization/register" component={OrganizationRegister} />
            <Route exact path="/user/register" component={userRegister} />
            <Route exact path="/user/login" component={userLogin} />
            <Route exact path="/user/student/profile" component={StudentProfile} />
            <Route exact path ="/user/notifications" component={Notifications} />
            <Route exact path="/user/admin/profile" component={AdminPanel} />
        </Router>
    )
}

export default Routes;