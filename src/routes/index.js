import React from 'react';
import { 
    Router, 
    Route 
} from 'react-router-dom';

import OrganizationRegister from '../pages/OrganizationRegister';
import userRegister from '../pages/UserRegistration';
import userLogin from '../pages/UserLogin';
<<<<<<< HEAD
import MeetingsPage from '../pages/MeetingsPage.js'
=======
import StudentProfile from '../pages/StudentProfile';
import AdminPanel from '../pages/AdminPanel/AdminPanel';
>>>>>>> a7203b93f014607a43c8bc4fd93f5117a25fb6ad

const Routes = (props) => {
    return (
        <Router history={props.history}>
            <Route exact path="/organization/register" component={OrganizationRegister} />
            <Route exact path="/user/register" component={userRegister} />
            <Route exact path="/user/login" component={userLogin} />
<<<<<<< HEAD
            <Route exact path="/meetings" component={MeetingsPage}/>
=======
            <Route exact path="/user/student/profile" component={StudentProfile} />
            <Route exact path="/user/admin/profile" component={AdminPanel} />
>>>>>>> a7203b93f014607a43c8bc4fd93f5117a25fb6ad
        </Router>
    )
}

export default Routes;