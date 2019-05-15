import React from 'react';
import PropTypes from 'prop-types';
import {
    InputGroup,
    Input,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane
} from 'reactstrap';
import classnames from 'classnames';

import MentorAppList from './MentorAppList';
import GetMentorApplication from './GetMentorApplication';

class MentorApplications extends React.Component {
    state = {
        dropdownOpen: false,
        activeTab: '1',
        searchBarContents: ''
    };

    toggleDropdown = () => {
        this.setState((prevState) => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    };

    changeHandler = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    };

    toggleTab = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    };

    filterBySearch = (role) => {
        const searchInput = this.state.searchBarContents.toLowerCase();
        let filteredUsers = [];

        if (role === 'mentee') {
            filteredUsers = this.props.mentees.filter((mentee) => {
                return (
                    mentee.last_name.toLowerCase().includes(searchInput) ||
                    mentee.first_name.toLowerCase().includes(searchInput) ||
                    mentee.email.toLowerCase().includes(searchInput)
                );
            });
        } else if (role === 'mentor') {
            filteredUsers = this.props.mentors.filter((mentor) => {
                return (
                    mentor.last_name.toLowerCase().includes(searchInput) ||
                    mentor.first_name.toLowerCase().includes(searchInput) ||
                    mentor.email.toLowerCase().includes(searchInput)
                );
            });
        }

        return filteredUsers;
    };

    render() {
        return (
            <div className='MentorApplication'>
                <InputGroup>
                    <Input
                        placeholder='Search by email or name'
                        name='searchBarContents'
                        value={this.state.searchBarContents}
                        onChange={this.changeHandler}
                    />
                </InputGroup>

                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                    <DropdownToggle caret>All</DropdownToggle>

                    <DropdownMenu>
                        <DropdownItem>Undecided</DropdownItem>
                        <DropdownItem>Approved</DropdownItem>
                        <DropdownItem>Denied</DropdownItem>
                    </DropdownMenu>
                </Dropdown>

                <Nav>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => {
                                this.toggleTab('1');
                            }}
                        >
                            Mentor Applications
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => {
                                this.toggleTab('2');
                            }}
                        >
                            Student Applications
                        </NavLink>
                    </NavItem>
                </Nav>

                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId='1'>

                        {this.props.mentors.length && (
                            <MentorAppList mentors={this.filterBySearch('mentor')} />
                        )}
                    </TabPane>

                    <TabPane tabId='2'>
                        {this.props.mentees.length && 
                            <GetMentorApplication 
                                users={this.props.users} 
                                mentees={this.filterBySearch("mentee")}
                                mentors={this.props.mentors}
                            />}
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

MentorApplications.propTypes = {
    mentors: PropTypes.array.isRequired,
    mentees: PropTypes.array.isRequired,
    users: PropTypes.array.isRequired
};

export default MentorApplications;
