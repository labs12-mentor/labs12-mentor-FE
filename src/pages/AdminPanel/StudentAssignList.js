import React from 'react';
import history from '../../history';
import {
    Table
} from 'reactstrap';


class StudentAssignList extends React.Component {
    routeToAssignments(id) {
        history.push(`/user/admin/mentorassignment/${id}/mentee`);
    }

    render() {
        let pairs = [];

        this.props.matches.forEach(match => {
            let pair = {
                id: match.id,
                mentor: { first_name: "Mentor", last_name: " Name" },
                mentee: {}
            };

            this.props.users.forEach(user => {
                if(user.id === match.mentee_id){
                    pair.mentee = user
                } else if(user.id === match.mentor_id){
                    pair.mentor = user;;
                }
            });
            pairs.push(pair);
        });
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
                    {pairs.map(pair => {
                        return <tr key={pair.id} onClick={() => this.routeToAssignments(pair.id)}>
                                    <td>{pair.mentee.last_name}</td>
                                    <td>{pair.mentee.first_name}</td>
                                    <td>{pair.mentee.email}</td>
                                    <td>{pair.mentor.first_name + pair.mentor.last_name}</td>
                                </tr>
                    })}
                </tbody>
            </Table>
        );
    }
}

export default StudentAssignList;