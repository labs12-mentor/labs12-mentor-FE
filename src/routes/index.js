import React from 'react';
import { 
    BrowserRouter as Router, 
    Route 
} from 'react-router-dom';

import OrganizationRegister from '../pages/OrganizationRegister';

const Routes = (props) => {
    return (
        <Router>
            <Route path="/organization/register" component={OrganizationRegister} />
        </Router>
    )
}

export default Routes;