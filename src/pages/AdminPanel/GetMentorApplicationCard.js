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

    clickHandler = (e, mentorId, menteeId) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]: true
        });

        this.props.createMatch({
            mentor_id: mentorId,
            mentee_id: menteeId,
            deleted: false,
            status: 'approved'
        });
        //create a match
        //remove that mentor from the available mentors
    }

    render() {
        const { mentee } = this.props;
        return (
            <tr onClick={() => this.routeToApplication(mentee.id)}>
                <td>{mentee.id + mentee.last_name}</td>
                <td>{mentee.first_name}</td>
                <td>{mentee.email}</td>
                <td>{this.props.users.filter(user => {
                        return user.id === mentee.wanted_mentor_id
                    }).map(user => {
                        return user.first_name + " " + user.last_name + mentee.wanted_mentor_id;
                    })}
                </td>

                <td>
                    {!this.state.approve && !this.state.deny ? 
                    <ButtonGroup>
                        <Button onClick={e => this.clickHandler(e, mentee.wanted_mentor_id, mentee.id)} name="approve" color="success">Approve</Button>
                        <Button onClick={e => this.clickHandler(e, mentee.wanted_mentor_id, mentee.id)} name="deny" color="danger">Deny</Button>
                    </ButtonGroup> : 
                    <p>{this.state.approve ? "Approved" : "Deny" }</p>}
                </td>
            </tr>
        );
    }
}

export default connect(null, { createMatch })(GetMentorApplication);