import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavPills from "../../../material-components/NavPills/NavPills.jsx";
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';

import { getSpecificMatch, getUsers } from '../../../actions';

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
        currentMatch: {}
    };

    async componentDidMount() {
        await this.props.getSpecificMatch(this.props.match.params.id);
        await this.props.getUsers();
    }

    toggleTab = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    };

    render() {
        console.log(this.props);
        let mentorMatch = {};
        let menteeMatch = {};
        if (this.props.currentMatch && this.props.match.params.role === 'mentor') {
            this.props.users.forEach((user) => {
                if (user.id === this.props.currentMatch.mentor_id) {
                    mentorMatch = user;
                }
            });
        } else if (this.props.currentMatch && this.props.match.params.role === 'mentee') {
            this.props.users.forEach((user) => {
                if (user.id === this.props.currentMatch.mentee_id) {
                    menteeMatch = user;
                }
            });
        }
        return (
            <AppContainer>
                <NavPills
                    color="info"
                    tabs={[
                        {
                        tabButton: "Match Information",
                        tabContent: (
                            <Recommended
                                currentMatch={this.state.currentMatch}
                                mentorMatch={mentorMatch}
                                menteeMatch={menteeMatch}
                            />
                        )
                        },
                        {
                        tabButton: "Match Map View",
                        tabContent: (
                            <MapView mentorMatch={mentorMatch} menteeMatch={menteeMatch} />
                        )
                        }
                    ]}
                />
            </AppContainer>
        );
    }
}

Assignment.propTypes = {
    currentMatch: PropTypes.object.isRequired,
    users: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
    return {
        currentMatch: state.matches.currentMatch,
        users: state.users.users
    };
};

const mapDispatchToProps = {
    getSpecificMatch,
    getUsers
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Assignment);
