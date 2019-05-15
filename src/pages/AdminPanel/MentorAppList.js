import React from 'react';
import PropTypes from 'prop-types';
import history from '../../history';
import { Table } from 'reactstrap';

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
                            <tr key={index} onClick={() => this.routeToApplication(mentor.id)}>
                                <td>{mentor.last_name}</td>
                                <td>{mentor.first_name}</td>
                                <td>{mentor.email}</td>
                                <td>Undecided</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        );
    }
}

ApplicationsList.propTypes = {
    mentors: PropTypes.array.isRequired
};

export default ApplicationsList;
