import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import MentorApplications from './MentorApplications';
import StudentApplications from './StudentApplications';

function TabContainer(props) {
return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
    {props.children}
    </Typography>
);
}

TabContainer.propTypes = {
children: PropTypes.node.isRequired,
};

const styles = theme => ({
root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
},
});

// import MentorAppList from './MentorAppList';
// import GetMentorApplication from './GetMentorApplication';

class Applications extends React.Component {
    state = {
        dropdownOpen: false,
        activeTab: '1',
        searchBarContents: '',
        value: 0
    };

    handleChange = (event, value) => {
        this.setState({ value });
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
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <div className='MentorApplication'>
                <div className={classes.root}>
                    <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label="Mentor Applications" />
                        <Tab label="Student Applications" />
                    </Tabs>
                    </AppBar>
                    {value === 0 && 
                    this.props.mentors.length &&
                        <MentorApplications 
                            mentors={this.filterBySearch('mentor')}
                        />}
                    {value === 1 && <StudentApplications />}
                </div>
                {/* <InputGroup>
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
                </TabContent> */}
            </div>
        );
    }
}

// MentorApplications.propTypes = {
//     mentors: PropTypes.array.isRequired,
//     mentees: PropTypes.array.isRequired,
//     users: PropTypes.array.isRequired
// };

export default withStyles(styles)(Applications);
