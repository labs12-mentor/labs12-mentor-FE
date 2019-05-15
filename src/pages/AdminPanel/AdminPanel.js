import React from 'react';
import { connect } from 'react-redux';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import { getUsers, getMentees, getMentors, getMatches } from '../../actions';

import MentorApplications from './MentorApplications';
import MentorAssignment from './MentorAssignment';
import ProfileForms from './ProfileForms';

class AdminPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1',
            users: [],
            matches: [],
            mentees: [],
            mentors: [],
            menteeUserInfo: [],
            mentorUserInfo: []
        };
    }

    async componentDidMount() {
        await this.props
            .getUsers()
            .then(async (res) => {
                await this.props.getMentees();
                await this.props.getMentors();
                await this.props.getMatches();
            })
            .then((res) => {
                this.setState({
                    users: this.props.users,
                    mentees: this.props.mentees,
                    mentors: this.props.mentors,
                    matches: this.props.matches
                });
            });
    }

    toggleTab = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    };

    filterMentees = () => {
        this.state.users.filter((user) => {
            this.state.mentees.map((mentee) => {
                if (user.id === mentee.user_id) {
                    user.wanted_mentor_id = mentee.wanted_mentor_id;
                    this.state.menteeUserInfo.push(user);
                }
            });
        });

        return this.state.menteeUserInfo;
    };

    filterMentors = () => {
        this.state.users.filter((user) => {
            this.state.mentors.map((mentor) => {
                if (user.id === mentor.user_id) {
                    user.status = mentor.status;
                    user.mentor_id = mentor.id;
                    this.state.mentorUserInfo.push(user);
                }
            });
        });



        return this.state.mentorUserInfo;
    };

    filterMatchedUsers() {
        const matchedUsers = [];
        this.state.matches.forEach(match => {
            let userMatchInfo = {
                mentor: {},
                mentee: {},
                id: match.id,
                status: "undecided"
            }
            this.state.users.forEach(user => {
                if(user.id === match.mentor_id){
                    userMatchInfo.mentor = user;
                    userMatchInfo.mentee = user;//delete according to below
                    matchedUsers.push(userMatchInfo);
                } 
                //this needs to be uncommented and the above line removed when the mentor/mentee ids in match are different
                // else if(user.id === match.mentee_id){
                //     userMatchInfo.mentee = user;
                //     matchedUsers.push(userMatchInfo);
                // }
            })
        })

        return matchedUsers;
    }

    render() {
        return (
            <div className='AdminPanel'>
                <h1> Administrator Panel </h1>

                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => {
                                this.toggleTab('1');
                            }}
                        >
                            Applications
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => {
                                this.toggleTab('2');
                            }}
                        >
                            Match Assignments
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => {
                                this.toggleTab('3');
                            }}
                        >
                            Profile Forms
                        </NavLink>
                    </NavItem>
                </Nav>

                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId='1'>
                        <MentorApplications 
                            users={this.state.users}
                            mentees={this.filterMentees()} 
                            mentors={this.filterMentors()}
                        />
                    </TabPane>
                    <TabPane tabId='2'>
                        <MentorAssignment 
                            matchedUsers={this.filterMatchedUsers()} 
                            users={this.state.users}
                            matches={this.state.matches} 
                        />
                    </TabPane>

                    <TabPane tabId='3'>
                        <ProfileForms />
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

const mstp = (state) => {
    return {
        users: state.users.users,
        mentees: state.mentees.mentees,
        matches: state.matches.matches,
        mentors: state.mentors.mentors
    };
};

export default connect(
    mstp,
    { getUsers, getMentees, getMentors, getMatches }
)(AdminPanel);
