import React from 'react';
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

import MentorAssignList from './MentorAssignList';
import StudentAssignList from './StudentAssignList';
import { assignmentExpression } from '@babel/types';


class MentorAssignment extends React.Component {
    state = {
        dropdownOpen: false,
        activeTab: '1',
        searchBarContents: ""
    }

    changeHandler = e => {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    filterBySearch = () => {
        const searchInput = this.state.searchBarContents.toLowerCase();
        const filteredMentees = this.props.matchedUsers.filter(user => {
            return (user.last_name.toLowerCase().includes(searchInput)
                || user.first_name.toLowerCase().includes(searchInput) 
                || user.email.toLowerCase().includes(searchInput));
        });
        
        return filteredMentees;
    }

    toggleDropdown = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    toggleTab = tab => {
        if(this.state.activeTab !== tab){
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <div className="MentorAssignment">
                <InputGroup>
                    <Input 
                        placeholder="Search by email or name"
                        name="searchBarContents"
                        value={this.state.searchBarContents}
                        onChange={this.changeHandler}
                    />
                </InputGroup>

                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                    <DropdownToggle caret>
                        All
                    </DropdownToggle>

                    <DropdownMenu>
                        <DropdownItem>Matched</DropdownItem>
                        <DropdownItem>Unmatched</DropdownItem>
                    </DropdownMenu>
                </Dropdown>

                <Nav>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggleTab('1'); }}
                        >
                            Mentors
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggleTab('2'); }}
                        >
                            Students
                        </NavLink>
                    </NavItem>
                </Nav>

                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId='1'>
                        <h2>Mentors</h2>

                        <MentorAssignList 
                            matchedUsers={this.filterBySearch()}
                            users={this.props.users}
                            matches={this.props.matches}
                        />
                    </TabPane>

                    <TabPane tabId='2'>
                        <h2>Students</h2>

                        <StudentAssignList 
                            matchedUsers={this.filterBySearch()}
                            users={this.props.users}
                            matches={this.props.matches}
                        />
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default MentorAssignment;