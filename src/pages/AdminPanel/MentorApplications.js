import React from 'react';
import {
    InputGroup,
    Input,

    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,

    Table
} from 'reactstrap';

class MentorApplications extends React.Component {
    state = {
        dropdownOpen: false
    }

    toggleDropdown = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        return (
            <div className="MentorApplication">
                <InputGroup>
                    <Input placeholder="Search by email or name" />
                </InputGroup>

                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                    <DropdownToggle caret>
                        All
                    </DropdownToggle>

                    <DropdownMenu>
                        <DropdownItem>Undecided</DropdownItem>
                        <DropdownItem>Approved</DropdownItem>
                        <DropdownItem>Denied</DropdownItem>
                    </DropdownMenu>
                </Dropdown>

                <h3>Applications</h3>
                {/* will need to use map function to create table rows of students and mentors */}
                <Table striped>
                    <thead>
                        <tr>
                            <th>Last Name</th>
                            <th>First Name</th>
                            <th>Email</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Doe</td>
                            <td>Jane</td>
                            <td>user@domain.com</td>
                            <td>Approved</td>
                        </tr>

                        <tr>
                            <td>Doe</td>
                            <td>Jane</td>
                            <td>user@domain.com</td>
                            <td>Approved</td>
                        </tr>

                        <tr>
                            <td>Doe</td>
                            <td>Jane</td>
                            <td>user@domain.com</td>
                            <td>Approved</td>
                        </tr>

                        <tr>
                            <td>Doe</td>
                            <td>Jane</td>
                            <td>user@domain.com</td>
                            <td>Approved</td>
                        </tr>

                        <tr>
                            <td>Doe</td>
                            <td>Jane</td>
                            <td>user@domain.com</td>
                            <td>Approved</td>
                        </tr>

                        <tr>
                            <td>Doe</td>
                            <td>Jane</td>
                            <td>user@domain.com</td>
                            <td>Approved</td>
                        </tr>

                        <tr>
                            <td>Doe</td>
                            <td>Jane</td>
                            <td>user@domain.com</td>
                            <td>Approved</td>
                        </tr>

                        <tr>
                            <td>Doe</td>
                            <td>Jane</td>
                            <td>user@domain.com</td>
                            <td>Approved</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default MentorApplications;