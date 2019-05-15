import React from 'react';
import { Router, Route } from 'react-router-dom';
import RouteAuthNeeded from '../hoc/RouteAuthNeeded';
import RouteNoAuthNeeded from '../hoc/RouteNoAuthNeeded';

import HomePage from '../pages/HomePage';
import OrganizationRegister from '../pages/OrganizationRegister';
import OrganizationDetails from '../pages/OrganizationDetails';
import UserRegister from '../pages/UserRegistration';
import UserLogin from '../pages/UserLogin';
import Notifications from '../pages/NotificationsView';
import AdminPanel from '../pages/AdminPanel/AdminPanel';
import MeetingsPage from '../pages/MeetingsPage';
import Application from '../pages/AdminPanel/Application/Application';
import Assignment from '../pages/AdminPanel/Assignment/Assignment';
import ExperienceList from '../components/ExperiencesComponents/ExperienceList';
import Mapbox from '../components/MapboxMap/UserMapboxMap';
import MentorsList from '../components/MentorComponents/MentorsList';
import Navbar from '../components/Navbar';
import RegDetails from '../pages/RegistrationDetails';
import UserProfile from '../pages/UserProfile';
import InviteForm from '../components/InvitationComponents/InviteForm';
import MentorForm from '../components/MentorComponents/MentorForm';
import MatchesList from '../components/MatchesComponents/MatchesList';
import MentorProfile from '../components/MentorComponents/MentorProfile';

const Routes = (props) => {
    return (
        <Router history={props.history}>
            <Navbar />
            <Route exact path='/' component={RouteNoAuthNeeded(HomePage)} />
            <Route
                exact
                path='/organization/register'
                component={RouteNoAuthNeeded(OrganizationRegister)}
            />
            <Route exact path='/invitation/:id' component={RouteNoAuthNeeded(UserRegister)} />
            <Route exact path='/user/register/2' component={RouteNoAuthNeeded(RegDetails)} />
            <Route exact path='/user/login' component={RouteNoAuthNeeded(UserLogin)} />
            <Route exact path='/user/profile' component={RouteAuthNeeded(UserProfile)} />
            <Route exact path='/user/notifications' component={RouteAuthNeeded(Notifications)} />
            <Route exact path='/user/admin/profile' component={RouteAuthNeeded(AdminPanel)} />
            <Route
                exact
                path='/user/admin/mentorapplication/:id'
                component={RouteAuthNeeded(Application)}
            />
            <Route
                exact
                path='/user/admin/mentorassignment/:id/:role'
                component={RouteAuthNeeded(Assignment)}
            />
            <Route exact path='/user/meetings' component={RouteAuthNeeded(MeetingsPage)} />
            <Route exact path='/user/experiences' component={RouteAuthNeeded(ExperienceList)} />
            <Route exact path='/user/mentorsList' component={RouteAuthNeeded(MentorsList)} />
            {/* <Route exact path="/user/admin/invite" component={Invite} /> */}
            <Route exact path='/user/mentorform' component={RouteAuthNeeded(MentorForm)} />
            <Route exact path='/user/inviteform' component={InviteForm} />
            <Route exact path='/user/matchlist' component={RouteAuthNeeded(MatchesList)} />
            <Route exact path='/organization' component={RouteAuthNeeded(OrganizationDetails)} />
<<<<<<< HEAD
            <Route exact path='/map' component={Mapbox} />
=======
            <Route exact path='/user/mentorprofile' component={MentorProfile}/>
>>>>>>> master
        </Router>
    );
};

export default Routes;
