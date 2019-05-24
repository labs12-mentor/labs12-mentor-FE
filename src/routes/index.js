import React from 'react';
import { Router, Route } from 'react-router-dom';
import RouteAuthNeeded from '../hoc/RouteAuthNeeded';
import RouteNoAuthNeeded from '../hoc/RouteNoAuthNeeded';

// import OrganizationRegister from '../pages/OrganizationRegister';
// import OrganizationDetails from '../pages/OrganizationDetails';
import NewOrgsPage from '../pages/OrgsPage/NewOrgsPage.jsx';
import UserRegister from '../pages/UserRegistration';
import UserRegistration from '../components/MaterialUserRegistration';
// import UserLogin from '../pages/UserLogin';
// import SignIn from '../pages/MaterialLogIn';
import Notifications from '../pages/NotificationsView';
import ExperienceList from '../components/ExperiencesComponents/ExperienceList';
import MentorsList from '../components/MentorComponents/MentorsList';
import RegDetails from '../pages/RegistrationDetails';
// import UserProfile from '../pages/UserProfile';
//import InviteForm from '../components/InvitationComponents/InviteForm';
import MentorForm from '../components/MentorComponents/MentorForm';
import MatchesList from '../components/MatchesComponents/MatchesList';
import MaterialNavbar from '../components/MaterialNavBar';
import MentorProfile from '../components/MentorComponents/MentorProfile';

//ADMINISTRATOR PANEL
import AdministratorPanel from '../pages/AdministratorPanel/AdminPanel';
import MentorApplication from '../pages/AdministratorPanel/MentorApplications/SpecificApplicationInfo/Application';
import MatchApplication from '../pages/AdministratorPanel/MatchApplications/SpecificApplicationInfo/MatchApplication';
import MentorAssignment from '../pages/AdministratorPanel/MentorAssignments/SpecificAssignmentInfo/Assignment';
import MatchAssignment from '../pages/AdministratorPanel/MatchAssignments/SpecificAssignmentInfo/MatchAssignment';
// import AdminPanel from '../pages/AdminPanel/AdminPanel';
import MeetingsPage from '../pages/MeetingsPage';
// import MentorAssignment from '../pages/AdministratorPanel/MentorAssignments/MentorAssignments';
// import Application from '../pages/AdministratorPanel/Applications/ApplicationInfoPages/Application';
// import MatchAssignment from '../pages/AdministratorPanel/Assignments/AssignmentInfoPages/MatchAssignment';
// import MatchApplication from '../pages/AdministratorPanel/Assignments/AssignmentInfoPages/MatchApplication';

import OrganizationRegister from '../components/MaterialSignUp';
import UserLogin from '../components/MaterialLogin';
import LandingPage from '../pages/LandingPage/LandingPage';
import UserProfile from '../components/MaterialIUserProfile';
import InvitationForm from '../pages/Invitations/InvitationForm';

const Routes = (props) => {
    return (
        <Router history={props.history}>
            <MaterialNavbar />
            <Route exact path='/' component={LandingPage} />
            <Route
                exact
                path='/organization/register'
                component={RouteNoAuthNeeded(OrganizationRegister)}
            />
            {/* <Route exact path="/guide" component={UserModal}/> */}
            <Route exact path='/invitation-plain/:id' component={RouteNoAuthNeeded(UserRegister)} />
            <Route exact path='/invitation/:id' component={RouteNoAuthNeeded(UserRegistration)} />
            <Route exact path='/user/register/2' component={RouteNoAuthNeeded(RegDetails)} />
            <Route exact path='/user/login' component={RouteNoAuthNeeded(UserLogin)} />
            <Route exact path='/user/profile' component={RouteAuthNeeded(UserProfile)} />
            <Route exact path='/user/notifications' component={RouteAuthNeeded(Notifications)} />
            <Route exact path='/user/admin/panel' component={RouteAuthNeeded(AdministratorPanel)} />
            <Route exact path='/user/admin/invite' component={RouteAuthNeeded(InvitationForm)} />
            <Route
                exact
                path='/user/admin/mentor-application/:id'
                component={RouteAuthNeeded(MentorApplication)}
            />
            <Route
                exact
                path='/user/admin/match-application/:id'
                component={RouteAuthNeeded(MatchApplication)}
            />
            <Route
                exact
                path='/user/admin/mentor-assignment/:id'
                component={RouteAuthNeeded(MentorAssignment)}
            />
            <Route
                exact
                path='/user/admin/match-assignment/:id'
                component={RouteAuthNeeded(MatchAssignment)}
            />
            <Route exact path='/user/meetings' component={RouteAuthNeeded(MeetingsPage)} />
            <Route exact path='/user/experiences' component={RouteAuthNeeded(ExperienceList)} />
            <Route exact path='/user/mentorsList' component={RouteAuthNeeded(MentorsList)} />
            {/* <Route exact path="/user/admin/invite" component={Invite} /> */}
            <Route exact path='/user/mentorform' component={RouteAuthNeeded(MentorForm)} />
            {/* <Route exact path='/user/inviteform' component={InviteForm} /> */}
            <Route exact path='/user/matchlist' component={RouteAuthNeeded(MatchesList)} />
                <Route exact path='/organization' component={RouteAuthNeeded(NewOrgsPage)} />
            <Route exact path='/user/mentorprofile' component={MentorProfile}/>
        </Router>
    );
};

export default Routes;
