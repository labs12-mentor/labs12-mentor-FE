import React from 'react';
import {
    Table
} from 'reactstrap';


class StudentAssignList extends React.Component {
    render() {
        return (
            <Table striped>
                <thead>
                    <tr>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>City</th>
                        <th>Matched Mentor</th>
                    </tr>
                </thead>

                <tbody>
                    {this.props.matchedUsers.map(user => {
                        return <tr key={user.id}>
                                    <td>{user.last_name}</td>
                                    <td>{user.first_name}</td>
                                    <td>{user.email}</td>
                                    <td>Mentor Name</td>
                                </tr>
                    })}
                </tbody>
            </Table>
        );
    }
}

export default StudentAssignList;