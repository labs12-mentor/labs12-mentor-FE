import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavPills from "../../../../material-components/NavPills/NavPills.jsx";

import { getSpecificMentee, deleteMatch, getMentees, getMatches, getMentors, getUsers } from '../../../../actions';

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
        potentialMatchInfo: {}
    };

    async componentDidMount() {
        await this.props.getSpecificMentee(this.props.match.params.id);
        await this.props.getUsers();
        await this.props.getMentors();
        let menteeUserInfo = {
            id: this.props.currentMentee.id,
            mentee: {},
            mentor: {},
            deleted: false,
            wanted_mentor_id: this.props.currentMentee.wanted_mentor_id
        };

        menteeUserInfo.deleted = this.props.currentMentee.deleted;
        
        menteeUserInfo.mentee = this.props.users.filter(user => {
            return user.id === this.props.currentMentee.user_id;
        })[0];
        
        let mentorId = this.props.mentors.filter(mentor => {
            return mentor.id === this.props.currentMentee.wanted_mentor_id;
        })[0].user_id;
        
        menteeUserInfo.mentor = this.props.users.filter(user => {
            return user.id === mentorId;
        })[0];
        console.log(menteeUserInfo);
        
        this.setState({
            ...this.state,
            users: this.props.users,
            mentees: this.props.mentees,
            mentors: this.props.mentors,
            potentialMatchInfo: menteeUserInfo
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
                                <Recommended potentialMatch={this.state.potentialMatchInfo} />
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
        currentMentee: state.mentees.currentMentee,
        users: state.users.users,
        mentees: state.mentees.mentees,
        mentors: state.mentors.mentors,
    };
};

const mapDispatchToProps = {
    getSpecificMentee,
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
