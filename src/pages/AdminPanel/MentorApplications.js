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
        dropdownOpen: false,
        searchBarContents: ""
    }

    toggleDropdown = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
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
        const filteredMentees = this.props.mentees.filter(mentee => {
            return (searchInput.includes(mentee.last_name) || searchInput.includes(mentee.first_name) || searchInput.includes(mentee.email))
        });

        return this.props.mentees
    }

    render() {
        return (
            <div className="MentorApplication">
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
                        <DropdownItem>Undecided</DropdownItem>
                        <DropdownItem>Approved</DropdownItem>
                        <DropdownItem>Denied</DropdownItem>
                    </DropdownMenu>
                </Dropdown>

                <h3>Applications</h3>
                
                {this.props.mentees.length && <MentorAppList mentees={this.filterBySearch()} />}
            </div>
        );
    }
}

export default MentorApplications;