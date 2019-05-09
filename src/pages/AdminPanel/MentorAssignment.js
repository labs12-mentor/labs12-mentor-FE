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

                        <Table striped>
                            <thead>
                                <tr>
                                    <th>Last Name</th>
                                    <th>First Name</th>
                                    <th>City</th>
                                    <th>Matched Student</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Doe</td>
                                    <td>Jane</td>
                                    <td>Salt Lake</td>
                                    <td>John Doe</td>
                                </tr>

                                <tr>
                                    <td>Doe</td>
                                    <td>Jane</td>
                                    <td>Salt Lake</td>
                                    <td>John Doe</td>
                                </tr>

                                <tr>
                                    <td>Doe</td>
                                    <td>Jane</td>
                                    <td>Salt Lake</td>
                                    <td>John Doe</td>
                                </tr>
                            </tbody>
                        </Table>
                    </TabPane>

                    <TabPane tabId='2'>
                        <h2>Students</h2>

                        <Table striped>
                            <thead>
                                <tr>
                                    <th>Last Name</th>
                                    <th>First Name</th>
                                    <th>City</th>
                                    <th>Matched Students</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Doe</td>
                                    <td>Jane</td>
                                    <td>Salt Lake</td>
                                    <td>John Doe</td>
                                </tr>

                                <tr>
                                    <td>Doe</td>
                                    <td>Jane</td>
                                    <td>Salt Lake</td>
                                    <td>John Doe</td>
                                </tr>

                                <tr>
                                    <td>Doe</td>
                                    <td>Jane</td>
                                    <td>Salt Lake</td>
                                    <td>John Doe</td>
                                </tr>
                            </tbody>
                        </Table>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default MentorAssignment;