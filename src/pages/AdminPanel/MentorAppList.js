import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import history from '../../history';
import {
    Table
} from 'reactstrap';

import { getSpecificUser } from '../../actions';

class ApplicationsList extends React.Component {
    state = {
        menteeApplications: this.props.mentees
    }

    routeToApplication() {
        history.push('/user/admin/mentorapplication');
    }

    render() {
        return (
            <Table striped>
                <thead>
                    <tr>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>Email</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {this.state.menteeApplications.map((mentee, index) => {
                        return (
                            <tr key={index} onClick={() => this.routeToApplication()}>
                                <td>{mentee.first_name}</td>
                                <td>{mentee.last_name}</td>
                                <td>{mentee.email}</td>
                                <td>Approved</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        );
    }
}

export default connect(null, { getSpecificUser })(ApplicationsList);