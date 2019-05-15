import React from 'react';
import PropTypes from 'prop-types';
import history from '../../history';
import { connect } from 'react-redux';
import { Table, ButtonGroup, Button } from 'reactstrap';

import { deleteMatch } from '../../actions';

class StudentAssignList extends React.Component {
    routeToAssignments(id) {
        // history.push(`/user/admin/mentorassignment/${id}/mentee`);
    }

    deleteMatch = (e, matchId) => {
        e.preventDefault();
        this.props.deleteMatch(matchId);
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
                        <th />
                    </tr>
                </thead>

                <tbody>
                    {this.props.matchedUsers.map(match => {
                        return <tr key={match.id} onClick={() => this.routeToAssignments(match.id)}>
                                    <td>{match.mentee.last_name}</td>
                                    <td>{match.mentee.first_name}</td>
                                    <td>{match.mentee.email}</td>
                                    <td>{match.mentor.first_name + " " + match.mentor.last_name}</td>
                                    <td>
                                       <Button 
                                            color="danger" 
                                            onClick={e => this.deleteMatch(e, match.id)}
                                        >
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                    })}
                </tbody>
            </Table>
        );
    }
}

StudentAssignList.propTypes = {};

export default  connect(null, { deleteMatch })(StudentAssignList);
