import React from 'react';
import history from '../../history';
import {
    Table,
    ButtonGroup,
    Button
} from 'reactstrap';

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
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {this.props.matchedUsers.map(match => {
                        return <tr key={match.id} onClick={() => this.routeToAssignments(match.id)}>
                                   <td>{match.mentor.last_name}</td>
                                   <td>{match.mentor.first_name}</td>
                                   <td>{match.mentor.email}</td>
                                   <td>{match.mentee.first_name + " " + match.mentee.last_name}</td>
                                   <td>
                                       <Button color="danger">Delete</Button>
                                   </td>
                                </tr>
                    })}
                </tbody>
            </Table>
        );
    }
}

export default MentorAssignList;