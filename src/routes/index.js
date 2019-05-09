import React from 'react';
import { 
    Router, 
    Route 
} from 'react-router-dom';

import OrganizationRegister from '../pages/OrganizationRegister';
import UserRegister from '../pages/UserRegistration';
import UserLogin from '../pages/UserLogin';
import StudentProfile from '../pages/StudentProfile';
import Notifications from '../pages/NotificationsView';
import AdminPanel from '../pages/AdminPanel/AdminPanel';
import MeetingsPage from '../pages/MeetingsPage'
import Application from '../pages/AdminPanel/Application/Application';
import Assignment from '../pages/AdminPanel/Assignment/Assignment';
import HomePage from '../pages/HomePage';
import ExperienceList from '../components/ExperiencesComponents/ExperienceList';
import MentorsList from '../components/MentorComponents/MentorsList';
import NavBar from '../components/navBar';

const Routes = (props) => {
    return (
        <Router history={props.history}>
            <div>
                <header>
                    <NavBar />
                </header>
            </div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/organization/register" component={OrganizationRegister} />
            <Route exact path="/user/register" component={UserRegister} />
            <Route exact path="/user/login" component={UserLogin} />
            <Route exact path="/user/student/profile" component={StudentProfile} />
            <Route exact path="/user/notifications" component={Notifications} />
            <Route exact path="/user/admin/profile" component={AdminPanel} />
            <Route exact path="/user/admin/mentorapplication" component={Application} />
            <Route exact path="/user/admin/mentorassignment" component={Assignment} />
            <Route exact path="/user/meetings" component={MeetingsPage}/>
            <Route exact path="/user/experiences" component={ExperienceList}/>
            {/* <Route exact path="/user/meetings/:id" component={MeetingsCard}/> */}
            <Route exact path="user/mentorsList" component={MentorsList}/>

        </Router>
    );
}

export default Routes;