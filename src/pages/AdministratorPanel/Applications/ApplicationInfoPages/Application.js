import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavPills from "../../../../material-components/NavPills/NavPills.jsx";

import { getSpecificUser } from '../../../../actions';

import ProfileInfo from './ProfileInfo';
import ApplicationRes from './ApplicationRes';

import styled from 'styled-components';

const AppContainer = styled.div`
    width: 80%;
    margin: 80px auto;
`;

class Application extends React.Component {
    state = {
        activeTab: '1',
        currentUser: {}
    };

    async componentDidMount() {
        let user = await this.props.getSpecificUser(this.props.match.params.id);
        await this.setState({
            currentUser: user.payload
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
                        tabButton: "Profile Information",
                        tabContent: (
                            <div></div>
                            // <ProfileInfo
                            //     menteeId={this.props.match.params.id}
                            //     currentUser={this.state.currentUser}
                            // />
                        )
                        },
                        {
                        tabButton: "Mentor Application",
                        tabContent: (
                            <ApplicationRes />
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
    return {};
};

const mapDispatchToProps = {
    getSpecificUser
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Application);
