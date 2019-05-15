import React from 'react';
import PropTypes from 'prop-types';
import history from '../../history';
import { Table, ButtonGroup, Button } from 'reactstrap';

import GetMentorApplicationCard from './GetMentorApplicationCard';

class GetMentorApplication extends React.Component {
    routeToApplication(id) {
        history.push(`/user/admin/mentorapplication/${id}`);
    }

    render() {
        return (
            <Table striped>
                <thead>
                    <tr>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>Email</th>
                        <th>Desired Mentor</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {this.props.mentees.map((mentee, index) => {
                        return (
                            <GetMentorApplicationCard
                                key={index}
                                mentee={mentee}
                                users={this.props.users}
                            />
                        );
                    })}
                </tbody>
            </Table>
        );
    }
}

GetMentorApplication.propTypes = {
    mentees: PropTypes.array.isRequired,
    users: PropTypes.array.isRequired
};

export default GetMentorApplication;
