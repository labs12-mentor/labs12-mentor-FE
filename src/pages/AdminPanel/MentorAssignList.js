import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import {
    Table
} from 'reactstrap';

class MentorAssignList extends React.Component {

    routeToAssignments(id) {
        history.push(`/user/admin/mentorassignment/${id}/mentor`);
    }

    render() {
        let pairs = [];

        this.props.matches.forEach(match => {
            let pair = {
                id: match.id,
                mentor: {},
                mentee: { first_name: "No", last_name: " Matches"}
            };

            this.props.users.forEach(user => {
                if(user.id === match.mentor_id){
                    pair.mentor = user;
                } else if(user.id === match.mentee_id){
                    pair.mentee = user;
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
                        <th>Matched Student</th>
                    </tr>
                </thead>

                <tbody>
                    {pairs.map(pair => {
                        return <tr key={pair.id} onClick={() => this.routeToAssignments(pair.id)}>
                                   <td>{pair.mentor.last_name}</td>
                                   <td>{pair.mentor.first_name}</td>
                                   <td>{pair.mentor.email}</td>
                                   <td>{pair.mentee.first_name + pair.mentee.last_name}</td>
                                </tr>
                    })}
                </tbody>
            </Table>
        );
    }
}

export default MentorAssignList;