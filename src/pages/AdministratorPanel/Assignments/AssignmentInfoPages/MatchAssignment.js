import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavPills from "../../../../material-components/NavPills/NavPills.jsx";

import { getSpecificMatch, deleteMatch, getMentees, getMatches, getMentors, getUsers } from '../../../../actions';

import Recommended from './Recommended';
import MapView from './MapView';
import styled from 'styled-components';

const AppContainer = styled.div`
    width: 80%;
    margin: 80px auto;
`;

class Assignment extends React.Component {
    state = {
        activeTab: '1',
        mentees: [],
        mentors: [],
        users: [],
        currentMatchInfo: {}
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
            deleted: false
        };

        matchUserInfo.deleted = this.props.currentMatch.deleted;


        let menteeId = this.props.mentees.filter(mentee => {
            return mentee.id === this.props.currentMatch.mentee_id;
        })[0].user_id;

        matchUserInfo.mentee = this.props.users.filter(user => {
            return user.id === menteeId;
        })[0];

        let mentorId = this.props.mentors.filter(mentor => {
            return mentor.id === this.props.currentMatch.mentor_id;
        })[0].user_id;

        matchUserInfo.mentor = this.props.users.filter(user => {
            return user.id === mentorId;
        })[0];

        this.setState({
            ...this.state,
            users: this.props.users,
            mentees: this.props.mentees,
            mentors: this.props.mentors,
            currentMatchInfo: matchUserInfo
        });
    }

    toggleTab = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    };

    render() {
        return (
            <AppContainer>
                <NavPills
                    color="info"
                    tabs={[
                        {
                            tabButton: "Match Information",
                            tabContent: (
                                <Recommended currentMatch={this.state.currentMatchInfo} />
                            )
                        },
                        {
                            tabButton: "Match Map View",
                            tabContent: (
                                <MapView currentMatch={this.state.currentMatchInfo} />
                            )
                        }
                    ]}
                />
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
    getMatches,
    getMentees,
    getMentors,
    getUsers,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Assignment);
