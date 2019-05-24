import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavPills from "../../../../material-components/NavPills/NavPills.jsx";

import { getSpecificUser, getSpecificMentor } from '../../../../actions';

import ProfileInfo from './ProfileInfo';
import SubmittedApplication from './SubmittedApplication';

import styled from 'styled-components';
import { theme } from '../../../../themes.js';

const AppContainer = styled.div`
    width: 80%;
    margin: 80px auto;
`;

class Application extends React.Component {
    state = {
        activeTab: '1',
        user: null,
        mentor: null
    };

    async componentDidMount() {
        await this.props.getSpecificMentor(this.props.match.params.id);
        await this.props.getSpecificUser(this.props.mentor.user_id);
        
        this.setState({
            ...this.state,
            user: this.props.user,
            mentor: this.props.mentor
        })
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
                        tabButton: "Profile Information",
                        tabContent: (

                            <ProfileInfo
                                user={this.state.user}
                                mentor={this.state.mentor}
                            />
                        )
                        },
                        {
                        tabButton: "Mentor Application",
                        tabContent: (
                            <SubmittedApplication />
                        )
                        }
                    ]}
                />
            </AppContainer>
        );
    }
}

Application.propTypes = {
    match: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        mentor: state.mentors.currentMentor,
        user: state.users.currentUser
    };
};

const mapDispatchToProps = {
    getSpecificUser,
    getSpecificMentor
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Application);
