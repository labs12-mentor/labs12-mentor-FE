import React from 'react';
import { 
    Router, 
    Route 
} from 'react-router-dom';

import OrganizationRegister from '../pages/OrganizationRegister';
import userRegister from '../pages/UserRegistration';
import userLogin from '../pages/UserLogin';
import StudentProfile from '../pages/StudentProfile';
import AdminPanel from '../pages/AdminPanel/AdminPanel';
import MeetingsPage from '../pages/MeetingsPage'
import ExperienceList from '../components/ExperiencesComponents/ExperienceList';

const Routes = (props) => {
    return (
        <Router history={props.history}>
            <Route exact path="/organization/register" component={OrganizationRegister} />
            <Route exact path="/user/register" component={userRegister} />
            <Route exact path="/user/login" component={userLogin} />
            <Route exact path="/user/student/profile" component={StudentProfile} />
            <Route exact path="/user/admin/profile" component={AdminPanel} />
            <Route exact path="/user/meetings" component={MeetingsPage}/>
            <Route exact path="/user/experiences" component={ExperienceList}/>
            
        </Router>
    )
}

export default Routes;