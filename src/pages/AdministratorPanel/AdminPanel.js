import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUsers, getMentees, getMentors, getMatches } from '../../actions';

import MentorApplications from './Applications/MentorApplications';
import MatchApplications from './Applications/StudentApplications';
import MentorAssignments from './Assignments/Mentors';
import MatchAssignments from './Assignments/Students';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Face from "@material-ui/icons/Face";
import AccountCircle from '@material-ui/icons/AccountCircle';
import Group from '@material-ui/icons/Group';
// core components
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import CustomTabs from "../../material-components/CustomTabs/CustomTabs.jsx";
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
            value: 0
        };
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

    render() {
        const { classes } = this.props;
        
        return (
            <AppContainer className={classes.root}>
                <CustomTabs 
                        headerColor="info"
                        tabs={[
                    {
                        tabName: "Mentor Applications",
                        tabIcon: Face,
                        tabContent: (
                            <MentorApplications />
                        )
                    },
                    {
                        tabName: "Match Applications",
                        tabIcon: Group,
                        tabContent: (
                            <MatchApplications />
                        )
                    },
                    {
                        tabName: "Mentor Assignments",
                        tabIcon: Face,
                        tabContent: (
                            <MentorAssignments />
                        )
                    },
                    {
                        tabName: "Match Assignments",
                        tabIcon: Group,
                        tabContent: (
                            <MatchAssignments />
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
