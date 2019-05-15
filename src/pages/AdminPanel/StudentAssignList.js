import React from 'react';
import history from '../../history';
import {
    Table,
    ButtonGroup,
    Button
} from 'reactstrap';

class StudentAssignList extends React.Component {
    routeToAssignments(id) {
        history.push(`/user/admin/mentorassignment/${id}/mentee`);
    }

    render() {
        return (
            <Table striped>
                <thead>
                    <tr>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>City</th>
                        <th>Matched Mentor</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {this.props.matchedUsers.map(match => {
                        return <tr key={match.id} onClick={() => this.routeToAssignments(match.id)}>
                                    <td>{match.mentee.last_name}</td>
                                    <td>{match.mentee.first_name}</td>
                                    <td>{match.mentee.email}</td>
                                    <td>{match.mentor.first_name + " " + match.mentor.last_name}</td>
                                    <td>{match.status}</td>
                                </tr>
                    })}
                </tbody>
            </Table>
        );
    }
}

export default StudentAssignList;