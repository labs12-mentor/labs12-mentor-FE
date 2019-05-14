import React from 'react';
import history from '../../history';
import {
    Table
} from 'reactstrap';

import MentorAppListCard from './MentorAppListCard';

class ApplicationsList extends React.Component {
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
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {this.props.mentors.map((mentor, index) => {
                        return (
                            <MentorAppListCard key={index} mentor={mentor} />
                        )
                    })}
                </tbody>
            </Table>
        );
    }
}

export default ApplicationsList;