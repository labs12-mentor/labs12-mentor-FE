import React from 'react';
import { connect } from 'react-redux';
import {
    Table
} from 'reactstrap';

import { getSpecificUser } from '../../actions';

class ApplicationsList extends React.Component {
    state = {
        menteeApplications: this.props.mentees
    }

    render() {
        console.log('render', this.props.mentees);
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
                            <tr key={index} >
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