import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import {
    Table
} from 'reactstrap';

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
                    {this.props.mentees.map((mentee, index) => {
                        return (
                            <tr key={index} onClick={() => this.routeToApplication(mentee.id)}>
                                <td>{mentee.last_name}</td>
                                <td>{mentee.first_name}</td>
                                <td>{mentee.email}</td>
                                <td>Undecided</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        );
    }
}

export default ApplicationsList;