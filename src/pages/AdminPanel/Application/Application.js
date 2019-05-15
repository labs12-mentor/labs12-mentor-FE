import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';

import { getSpecificUser } from '../../../actions';

import ProfileInfo from './ProfileInfo';
import ApplicationRes from './ApplicationRes';

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
            <div className='Application'>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => {
                                this.toggleTab('1');
                            }}
                        >
                            Profile Information
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => {
                                this.toggleTab('2');
                            }}
                        >
                            Application Response
                        </NavLink>
                    </NavItem>
                </Nav>

                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId='1'>
                        <ProfileInfo
                            menteeId={this.props.match.params.id}
                            currentUser={this.state.currentUser}
                        />
                    </TabPane>

                    <TabPane tabId='2'>
                        <ApplicationRes />
                    </TabPane>
                </TabContent>
            </div>
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
