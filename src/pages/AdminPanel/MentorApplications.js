import React from 'react';
import { connect } from 'react-redux';
import {
    InputGroup,
    Input,

    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import MentorAppList from './MentorAppList';

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
                
                {this.props.mentees.length && <MentorAppList mentees={this.props.mentees} />}
            </div>
        );
    }
}

export default MentorApplications;