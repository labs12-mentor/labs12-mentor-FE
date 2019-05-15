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
import MentorsList from '../components/MentorComponents/MentorsList';
import Navbar from '../components/Navbar';
import RegDetails from '../pages/RegistrationDetails';
import UserProfile from '../pages/UserProfile';
import InviteForm from '../components/InvitationComponents/InviteForm';
import MentorForm from '../components/MentorComponents/MentorForm';
import MatchesList from '../components/MatchesComponents/MatchesList';

import styled from 'styled-components';
const AppCont = styled.div`
    padding: 100px 20px;
`;

const Routes = (props) => {
    return (
        <Router history={props.history}>
        <div id="wrapper" >
        <Navbar />
            <div id="main">
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
            </div>
                        

                <footer id="footer">
                    <section>
                        <h2>Aliquam sed mauris</h2>
                        <p>Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.</p>
                        <ul className="actions">
                            <li><a href="generic.html" className="button">Learn More</a></li>
                        </ul>
                    </section>
                    <section>
                        <h2>Etiam feugiat</h2>
                        <dl className="alt">
                            <dt>Address</dt>
                            <dd>1234 Somewhere Road &bull; Nashville, TN 00000 &bull; USA</dd>
                            <dt>Phone</dt>
                            <dd>(000) 000-0000 x 0000</dd>
                            <dt>Email</dt>
                            <dd><a href="#">information@untitled.tld</a></dd>
                        </dl>
                        <ul className="icons">
                            <li><a href="#" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
                            <li><a href="#" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
                            <li><a href="#" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
                            <li><a href="#" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
                            <li><a href="#" className="icon fa-dribbble alt"><span className="label">Dribbble</span></a></li>
                        </ul>
                    </section>
                    <p className="copyright">&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
                </footer>

            </div>
            </Router>
    );
};

export default Routes;
