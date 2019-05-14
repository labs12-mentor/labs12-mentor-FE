import React from 'react';
import history from '../../history';
import { connect } from 'react-redux';
import {
    Table,
    ButtonGroup,
    Button
} from 'reactstrap';

import { createMatch } from '../../actions';

class GetMentorApplication extends React.Component {
    state = {
        approve: false,
        deny: false
    }

    routeToApplication(id) {
        // history.push(`/user/admin/mentorapplication/${id}`);
    }

    clickHandler = (e, mentorId, menteeId, status) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]: true
        });
        if(status === "approved"){
            this.props.createMatch({
                mentor_id: mentorId,
                mentee_id: menteeId,
                deleted: false,
                status: status
            });
            //create a match
            //remove that mentor from the available mentors
            
            // this.props.evaluateMatch(e, mentorId, menteeId);
        }
    }

    render() {
        const { mentee } = this.props;
        return (
            <tr onClick={() => this.routeToApplication(mentee.id)}>
                <td>{mentee.last_name}</td>
                <td>{mentee.first_name}</td>
                <td>{mentee.email}</td>
                <td>{this.props.users.filter(user => {
                        return user.id === mentee.wanted_mentor_id
                    }).map(user => {
                        return user.first_name + " " + user.last_name;
                    })}
                </td>

                <td>
                    {/* {!this.state.approve && !this.state.deny ?  */}
                    <ButtonGroup>
                        <Button 
                            onClick={e => this.clickHandler(e, mentee.wanted_mentor_id, mentee.id, "approved")} 
                            name="approve" 
                            color="success"
                        >
                            Approve
                        </Button>

                        <Button 
                            onClick={e => this.clickHandler(e, mentee.wanted_mentor_id, mentee.id, "denied")} 
                            name="deny" 
                            color="danger"
                        >
                            Deny
                        </Button>
                    </ButtonGroup> 
                    {/* :  */}
                    {/* <p>{this.state.approve ? "Approved" : "Denied" }</p>} */}
                </td>
            </tr>
        );
    }
}

export default connect(null, { createMatch })(GetMentorApplication);