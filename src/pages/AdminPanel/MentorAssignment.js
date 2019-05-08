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
    TabPane,

    Table
} from 'reactstrap';
import classnames from 'classnames';

import MentorAssignList from './MentorAssignList';
import StudentAssignList from './StudentAssignList';


class MentorAssignment extends React.Component {
    state = {
        dropdownOpen: false,
        activeTab: '1'
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
                    <Input placeholder="Search by email or name" />
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

                        <MentorAssignList />
                    </TabPane>

                    <TabPane tabId='2'>
                        <h2>Students</h2>

                        <StudentAssignList />
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default MentorAssignment;