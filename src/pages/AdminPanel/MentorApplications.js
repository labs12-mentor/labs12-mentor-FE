import React from 'react';
import {
    InputGroup,
    Input,

    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

class MentorApplications extends React.Component {
    state = {
        dropdownOpen: false
    }

    toggle = () => {
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

                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                        All
                    </DropdownToggle>

                    <DropdownMenu>
                        <DropdownItem>Undecided</DropdownItem>
                        <DropdownItem>Approved</DropdownItem>
                        <DropdownItem>Denied</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        );
    }
}

export default MentorApplications;