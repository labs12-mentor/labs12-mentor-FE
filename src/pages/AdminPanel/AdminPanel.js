import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import { getUsers, getMentees, getMentors, getMatches } from '../../actions';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import MentorApplications from './MentorApplications';
import MentorAssignment from './MentorAssignment';
import ProfileForms from './ProfileForms';

import styled from 'styled-components';

const AppContainer = styled.div`
    margin: 60px auto;
    width: 80%;
`;

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

function LinkTab(props) {
    return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});

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
            mentorUserInfo: [],
            value: 0
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

    handleChange = (event, value) => {
        this.setState({ value });
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

    render() {
        const matchedUsers = [];
        this.state.matches.forEach(match => {
            if(match.deleted === false){
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
                });
            }
        });

        const { classes } = this.props;
        const { value } = this.state;
        
        return (
            <AppContainer>
                <div className='AdminPanel'>
                    <h1> Administrator Panel </h1>

                    <NoSsr>
                        <div className={classes.root}>
                            <AppBar position="static">
                            <Tabs variant="fullWidth" value={value} onChange={this.handleChange}>
                                <LinkTab label="Applications" href="page1" />
                                <LinkTab label="Match Assignments" href="page2" />
                                <LinkTab label="Profile Forms" href="page3" />
                            </Tabs>
                            </AppBar>
                            {value === 0 && <TabContainer>Page One</TabContainer>}
                            {value === 1 && <TabContainer>Page Two</TabContainer>}
                            {value === 2 && <TabContainer>Page Three</TabContainer>}
                        </div>
                    </NoSsr>

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
                                matchedUsers={matchedUsers} 
                                users={this.state.users}
                                matches={this.state.matches}
                            />
                        </TabPane>

                        <TabPane tabId='3'>
                            <ProfileForms />
                        </TabPane>
                    </TabContent>
                </div>
            </AppContainer>
        );
    }
}

AdminPanel.propTypes = {
    users: PropTypes.array.isRequired,
    mentees: PropTypes.array.isRequired,
    matches: PropTypes.array.isRequired,
    mentors: PropTypes.array.isRequired
};


const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        mentees: state.mentees.mentees,
        matches: state.matches.matches,
        mentors: state.mentors.mentors
    };
};

const mapDispatchToProps = {
    getUsers,
    getMentees,
    getMentors,
    getMatches
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(AdminPanel));
