import React from 'react';
import {
    Table
} from 'reactstrap';


class MentorAssignList extends React.Component {
    render() {
        console.log('mentorList', this.props.matchedUsers);
        return (
            <Table striped>
                <thead>
                    <tr>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>City</th>
                        <th>Matched Student</th>
                    </tr>
                </thead>

                <tbody>
                    {this.props.matchedUsers.map(user => {
                        return <tr key={user.id}>
                                    <td>{user.last_name}</td>
                                    <td>{user.first_name}</td>
                                    <td>{user.email}</td>
                                    <td>Student Name</td>
                                </tr>
                    })}
                </tbody>
            </Table>
        );
    }
}

export default MentorAssignList;