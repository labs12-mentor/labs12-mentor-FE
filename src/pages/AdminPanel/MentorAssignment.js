import React from 'react';
import {
    InputGroup,
    Input,

    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

class MentorAssignment extends React.Component {
    render() {
        return (
            <div className="MentorAssignment">
                <InputGroup>
                    <Input placeholder="Search by email or name" />
                </InputGroup>

                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                        All
                    </DropdownToggle>

                    <DropdownMenu>
                        <DropdownItem>Matched</DropdownItem>
                        <DropdownItem>Unmatched</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        );
    }
}

export default MentorAssignment;