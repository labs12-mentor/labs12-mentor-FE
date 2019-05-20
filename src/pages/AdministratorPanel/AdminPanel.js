import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUsers, getMentees, getMentors, getMatches } from '../../actions';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
import AccountCircle from '@material-ui/icons/AccountCircle';
import Group from '@material-ui/icons/Group';
// core components
import CustomTabs from "../../material-components/CustomTabs/CustomTabs.jsx";

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { theme } from '../../themes.js';
import { MuiThemeProvider } from '@material-ui/core/styles';

import MaterialTabs from './MaterialTabs';

import Applications from './Applications/Applications';
import Assignments from './Assignments/Assignments';
import MentorApplications from './Applications/MentorApplications';
import MatchApplications from './Applications/StudentApplications';
import MentorAssignments from './Assignments/Mentors';
import MatchAssignments from './Assignments/Students';
import ProfileForms from './ProfileForms/ProfileForms';

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
        marginTop: 100,
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    primaryText: {
        color: 'white'
    },
    textCenter: {
      textAlign: "center"
    }
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
            if(match.deleted === false && match.mentor_id !== match.mentee_id){
                let userMatchInfo = {
                    mentor: {},
                    mentee: {},
                    id: match.id,
                    status: "undecided"
                }
                this.state.users.forEach(user => {
                    if(user.id === match.mentor_id){
                        userMatchInfo.mentor = user;
                        // userMatchInfo.mentee = user;//delete according to below
                    } else if(user.id === match.mentee_id){
                        userMatchInfo.mentee = user;
                    }
                    //this needs to be uncommented and the above line removed when the mentor/mentee ids in match are different
                    
                });
                matchedUsers.push(userMatchInfo);
            }
        });

        const { classes } = this.props;
        const { value } = this.state;
        
        return (
            <div className={classes.root}>
            <CustomTabs 
            headerColor="info"
            tabs={[
          {
            tabName: "Mentor Applications",
            tabIcon: Face,
            tabContent: (
                <MentorApplications 
                    users={this.state.users}
                    mentees={this.filterMentees()}
                    mentors={this.filterMentors()}
                />
            )
          },
          {
            tabName: "Match Applications",
            tabIcon: Group,
            tabContent: (
                <MatchApplications 
                    users={this.state.users}
                    mentees={this.filterMentees()}
                    mentors={this.filterMentors()}
                />
            )
          },
          {
            tabName: "Mentor Assignments",
            tabIcon: Face,
            tabContent: (
                <MentorAssignments 
                    matchedUsers={matchedUsers} 
                    users={this.state.users}
                    matches={this.state.matches}
                />
            )
          },
          {
            tabName: "Match Assignments",
            tabIcon: Group,
            tabContent: (
                <MatchAssignments
                    matchedUsers={matchedUsers} 
                    users={this.state.users}
                    matches={this.state.matches}
                />
            )
          },
          {
            tabName: "Profile Forms",
            tabIcon: AccountCircle,
            tabContent: (
              <p className={classes.textCenter}>
              </p>
            )
          }
        ]}
      />
      </div>
            // <NoSsr>
            //     <div className={classes.root}>
            //         <MaterialTabs />
            //         <MuiThemeProvider theme={theme}>

            //         <AppBar position="static">
            //         <Tabs variant="fullWidth" value={value} onChange={this.handleChange} style={styles.primaryText} >
            //             <Tab label="Applications" />
            //             <Tab label="Match Assignments" />
            //             <Tab label="Profile Forms" />
            //         </Tabs>
            //         </AppBar>
            //         {value === 0 && 
            //             <Applications
            //                 users={this.state.users}
            //                 mentees={this.filterMentees()}
            //                 mentors={this.filterMentors()} 
            //             />}
            //         {value === 1 && 
            //             <Assignments 
            //                 matchedUsers={matchedUsers} 
            //                 users={this.state.users}
            //                 matches={this.state.matches}
            //             />}
            //         {value === 2 && <ProfileForms />}
            //         </MuiThemeProvider>
            //     </div>
            // </NoSsr>
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
