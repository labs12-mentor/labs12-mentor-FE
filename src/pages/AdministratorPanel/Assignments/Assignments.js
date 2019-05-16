import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

import MentorAssignments from './Mentors';
import StudentAssignments from './Students';

// import MentorAssignList from './MentorAssignList';
// import StudentAssignList from './StudentAssignList';

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    }
});
  
class Assignments extends React.Component {
    state = {
        dropdownOpen: false,
        activeTab: '1',
        searchBarContents: '',
        value: 0
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    changeHandler = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    };

    filterBySearch = (role) => {
        const searchInput = this.state.searchBarContents.toLowerCase();
        const filteredMentees = this.props.matchedUsers.filter((match) => {
            return (
                match[role].last_name.toLowerCase().includes(searchInput) ||
                match[role].first_name.toLowerCase().includes(searchInput) ||
                match[role].email.toLowerCase().includes(searchInput)
            );
        });

        return filteredMentees;
    };

    toggleDropdown = () => {
        this.setState((prevState) => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    };

    toggleTab = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
              <AppBar position="static">
                <Tabs value={value} onChange={this.handleChange} centered>
                  <Tab label="Mentors" />
                  <Tab label="Students" />
                </Tabs>
              </AppBar>
              {value === 0 && <MentorAssignments matchedUsers={this.filterBySearch('mentor')} />}
              {value === 1 && <StudentAssignments matchedUsers={this.filterBySearch('mentee')} />}
            </div>
            // <div className='MentorAssignment'>
            //     <InputGroup>
            //         <Input
            //             placeholder='Search by email or name'
            //             name='searchBarContents'
            //             value={this.state.searchBarContents}
            //             onChange={this.changeHandler}
            //         />
            //     </InputGroup>

            //     <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
            //         <DropdownToggle caret>All</DropdownToggle>

            //         <DropdownMenu>
            //             <DropdownItem>Matched</DropdownItem>
            //             <DropdownItem>Unmatched</DropdownItem>
            //         </DropdownMenu>
            //     </Dropdown>

            //     <Nav>
            //         <NavItem>
            //             <NavLink
            //                 className={classnames({ active: this.state.activeTab === '1' })}
            //                 onClick={() => {
            //                     this.toggleTab('1');
            //                 }}
            //             >
            //                 Mentors
            //             </NavLink>
            //         </NavItem>

            //         <NavItem>
            //             <NavLink
            //                 className={classnames({ active: this.state.activeTab === '2' })}
            //                 onClick={() => {
            //                     this.toggleTab('2');
            //                 }}
            //             >
            //                 Students
            //             </NavLink>
            //         </NavItem>
            //     </Nav>

            //     <TabContent activeTab={this.state.activeTab}>
            //         <TabPane tabId='1'>

            //             <MentorAssignList matchedUsers={this.filterBySearch('mentor')} />
            //         </TabPane>

            //         <TabPane tabId='2'>

            //             <StudentAssignList matchedUsers={this.filterBySearch('mentee')} />
            //         </TabPane>
            //     </TabContent>
            // </div>
        );
    }
}

// MentorAssignment.propTypes = {};

export default withStyles(styles)(Assignments);
