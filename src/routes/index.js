import React from 'react';
import { 
    Router, 
    Route 
} from 'react-router-dom';

import OrganizationRegister from '../pages/OrganizationRegister';
import userRegister from '../pages/UserRegistration';

const Routes = (props) => {
    return (
        <Router history={props.history}>
            <Route exact path="/organization/register" component={OrganizationRegister} />
            <Route exact path="/user/register" component={userRegister} />
        </Router>
    )
}

export default Routes;