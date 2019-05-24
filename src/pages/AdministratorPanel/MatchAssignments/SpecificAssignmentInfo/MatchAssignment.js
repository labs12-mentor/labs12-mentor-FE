import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import history from '../../../../history';
import NavPills from "../../../../material-components/NavPills/NavPills.jsx";

import Button from "../../../../material-components/CustomButtons/Button.jsx";
import FirstPage from '@material-ui/icons/FirstPage';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from "@material-ui/core/styles"
import { getSpecificMatch, deleteMatch, getMentees, getMentors, getUsers } from '../../../../actions';

import Recommended from './Recommended';
import MapView from './MapView';
import styled from 'styled-components';

const AppContainer = styled.div`
    width: 80%;
    margin: 80px auto;
`;

const styles = theme => ({
    root: {
      marginTop: '80px',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap'
    },
    btn: {
        marginTop: '20px',
    }
});


class Assignment extends React.Component {
    state = {
        activeTab: '1',
        matchInfo: {}
    };

    async componentDidMount() {
        await this.props.getSpecificMatch(this.props.match.params.id);
        await this.props.getUsers();
        await this.props.getMentors();
        await this.props.getMentees();
        
        let matchUserInfo = {
            id: this.props.currentMatch.id,
            mentee: {},
            mentor: {},
            deleted: this.props.currentMatch.deleted
        };

        matchUserInfo.deleted = this.props.currentMatch.deleted;

        let menteeId = this.props.mentees.filter(mentee => {
            return mentee.id === this.props.currentMatch.mentee_id;
        })[0].user_id;
        
        matchUserInfo.mentee = this.props.users.filter(user => {
            return user.id === menteeId;
        })[0];
        matchUserInfo.mentee_id = menteeId;
        
        let mentorId = this.props.mentors.filter(mentor => {
            return mentor.id === this.props.currentMatch.mentor_id;
        })[0].user_id;
        
        matchUserInfo.mentor = this.props.users.filter(user => {
            return user.id === mentorId;
        })[0];
        matchUserInfo.mentor_id = mentorId;
        
        this.setState({
            ...this.state,
            matchInfo: matchUserInfo
        });
    }

    toggleTab = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    };

    backBtnClick = e => {
        e.preventDefault();
        history.goBack();
    }

    render() {
        const { classes } = this.props;
        return (
            <AppContainer>
                <div className={classes.root} >
                <Button 
                    justIcon 
                    variant="outlined" 
                    className={classes.btn} 
                    size="medium" 
                    color="info"
                    onClick={e => this.backBtnClick(e)}
                >
                    <FirstPage />
                </Button>
                <NavPills
                    color="info"
                    tabs={[
                        {
                            tabButton: "Match Information",
                            tabContent: (
                                <Recommended matchInfo={this.state.matchInfo} />
                            )
                        },
                        {
                            tabButton: "Match Map View",
                            tabContent: (
                                <div></div>
                                // <MapView currentMatch={this.state.currentMatchInfo} />
                            )
                        }
                    ]}
                />
            </div>
            </AppContainer>
        );
    }
}

// Assignment.propTypes = {
//     currentMatch: PropTypes.object.isRequired,
//     users: PropTypes.array.isRequired
// };

const mapStateToProps = (state) => {
    return {
        currentMatch: state.matches.currentMatch,
        users: state.users.users,
        mentees: state.mentees.mentees,
        mentors: state.mentors.mentors,
    };
};

const mapDispatchToProps = {
    getSpecificMatch,
    deleteMatch,
    getMentees,
    getMentors,
    getUsers,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Assignment));
