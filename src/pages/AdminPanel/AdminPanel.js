import React from 'react';
import { connect } from 'react-redux';
import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
} from 'reactstrap';
import classnames from 'classnames';
import { getUsers, getMentees, getMatches } from '../../actions';

import MentorApplications from './MentorApplications';
import MentorAssignment from './MentorAssignment';
import ProfileForms from './ProfileForms';


class AdminPanel extends React.Component {
    state = {
        activeTab: '1',
        users: [],
        matches: [],
        mentees: [],
        menteeUserInfo: []
    }

    async componentDidMount() {
        await this.props.getUsers()
        .then(async res => {
            await this.props.getMentees();
            await this.props.getMatches();
        })
        .then(res => {
            this.setState({
                users: this.props.users,
                mentees: this.props.mentees,
                matches: this.props.matches
            });
        });
    }

    toggleTab = tab => {
        if(this.state.activeTab !== tab){
            this.setState({
                activeTab: tab
            });
        }
    }

    filterMentees = () => {
        this.state.users.filter(user => {
            this.state.mentees.map(mentee => {
                if(user.id === mentee.user_id){
                    this.state.menteeUserInfo.push(user);
                }
            });
        });

        return this.state.menteeUserInfo;
    }

    filterMatchedUsers() {
        const matchedUsers = [];
        this.state.users.filter(user => {
            this.state.matches.map(match => {
                if(user.id === match.mentor_id || user.id === match.mentee_id){
                    matchedUsers.push(user);
                }
            });
        });
        
        return matchedUsers;
    }

    render() {
        return (
            <div className="AdminPanel">
                <h1> Administrator Panel </h1>

                <Nav tabs>
                    <NavItem>
                        <NavLink 
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggleTab('1'); }} 
                        >
                            Mentor Applications
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink 
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggleTab('2'); }} 
                        >
                            Mentor Assignment
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink 
                            className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.toggleTab('3'); }} 
                        >
                            Profile Forms
                        </NavLink>
                    </NavItem>
                </Nav>

                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <MentorApplications mentees={this.filterMentees()} />
                    </TabPane>

                    <TabPane tabId="2">
                        <MentorAssignment matchedUsers={this.filterMatchedUsers()} matches={this.state.matches} />
                    </TabPane>

                    <TabPane tabId="3">
                        <ProfileForms />
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

const mstp = state => {
    return {
        users: state.users.users,
        mentees: state.mentees.mentees,
        matches: state.matches.matches
    }
}

export default connect(mstp, { getUsers, getMentees, getMatches })(AdminPanel);