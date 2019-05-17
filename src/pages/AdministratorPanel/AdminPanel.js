import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUsers, getMentees, getMentors, getMatches } from '../../actions';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { theme } from '../../themes.js';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Applications from './Applications/Applications';
import Assignments from './Assignments/Assignments';
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
            <NoSsr>
                <div className={classes.root}>
                    <MuiThemeProvider theme={theme}>

                    <AppBar position="static">
                    <Tabs variant="fullWidth" value={value} onChange={this.handleChange}>
                        <Tab label="Applications" />
                        <Tab label="Match Assignments" />
                        <Tab label="Profile Forms" />
                    </Tabs>
                    </AppBar>
                    {value === 0 && 
                        <Applications
                            users={this.state.users}
                            mentees={this.filterMentees()}
                            mentors={this.filterMentors()} 
                        />}
                    {value === 1 && 
                        <Assignments 
                            matchedUsers={matchedUsers} 
                            users={this.state.users}
                            matches={this.state.matches}
                        />}
                    {value === 2 && <ProfileForms />}
                    </MuiThemeProvider>
                </div>
            </NoSsr>
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
