import React from 'react';
import { 
    Router, 
    Route 
} from 'react-router-dom';

import OrganizationRegister from '../pages/OrganizationRegister';

const Routes = (props) => {
    return (
        <Router history={history}>
            <Route path="/organization/register" component={OrganizationRegister} />
        </Router>
    )
}

export default Routes;