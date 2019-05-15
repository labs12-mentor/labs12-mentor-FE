import React from 'react';
import PropTypes from 'prop-types';
import history from '../../history';
import { Table, ButtonGroup, Button } from 'reactstrap';

class MentorAssignList extends React.Component {
    routeToAssignments(id) {
        history.push(`/user/admin/mentorassignment/${id}/mentor`);
    }

    render() {
        return (
            <Table striped>
                <thead>
                    <tr>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>City</th>
                        <th>Matched Student</th>
                        <th>Status</th>
                        <th />
                    </tr>
                </thead>

                <tbody>
                    {this.props.matchedUsers.map((match) => {
                        return (
                            <tr key={match.id} onClick={() => this.routeToAssignments(match.id)}>
                                <td>{match.mentor.last_name}</td>
                                <td>{match.mentor.first_name}</td>
                                <td>{match.mentor.email}</td>
                                <td>{match.mentee.first_name + ' ' + match.mentee.last_name}</td>
                                <td>{match.status}</td>
                                <td>
                                    <ButtonGroup>
                                        <Button color='success'>Approve</Button>
                                        <Button color='danger'>Deny</Button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        );
    }
}

MentorAssignList.propTypes = {
    matchedUsers: PropTypes.array.isRequired
};

export default MentorAssignList;
