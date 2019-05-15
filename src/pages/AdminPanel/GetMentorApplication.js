import React from 'react';
import history from '../../history';
import {
    Table
} from 'reactstrap';

import GetMentorApplicationCard from './GetMentorApplicationCard';

class GetMentorApplication extends React.Component {
    state = {
        mentees: [],
        mentorIds: []
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
                {menteeApplications.map((mentee, index) => {
                        return ( <GetMentorApplicationCard key={index} 
                                    mentee={mentee} 
                                    users={this.props.users} 
                                    evaluateMatch={this.evaluateMatch}
                                /> )
                    })}
                </tbody>
            </Table>
        );
    }
}

export default GetMentorApplication;