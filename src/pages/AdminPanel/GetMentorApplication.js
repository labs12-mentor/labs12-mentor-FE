import React from 'react';
import PropTypes from 'prop-types';
import history from '../../history';
import { Table, ButtonGroup, Button } from 'reactstrap';

import GetMentorApplicationCard from './GetMentorApplicationCard';

class GetMentorApplication extends React.Component {
    state = {
        mentees: [],
        mentors: []
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            mentees: this.props.mentees,
            mentors: this.props.mentors
        });
    }

    routeToApplication(id) {
        history.push(`/user/admin/mentorapplication/${id}`);
    }

    render() {
        let menteeApplications = [];
        this.state.mentees.forEach(mentee => {
            this.state.mentors.forEach(mentor => {
                if(mentee.wanted_mentor_id === mentor.mentor_id && mentor.status === "AVAILABLE"){
                    menteeApplications.push(mentee);
                }
            });
        });
        
        return (
            <Table striped>
                <thead>
                    <tr>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>Email</th>
                        <th>Desired Mentor</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                {menteeApplications.map((mentee, index) => 
                        <GetMentorApplicationCard key={`mentorapplication${index}`} 
                            mentee={mentee} 
                            users={this.props.users} 
                            evaluateMatch={this.evaluateMatch}
                        />)}
                </tbody>
            </Table>
        );
    }
}

GetMentorApplication.propTypes = {
    mentees: PropTypes.array.isRequired,
    users: PropTypes.array.isRequired
};

export default GetMentorApplication;
