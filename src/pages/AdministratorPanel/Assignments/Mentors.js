import React from 'react';
import PropTypes from 'prop-types';
import history from '../../../history';
import { connect } from 'react-redux';
import { updateUser } from '../../../actions';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// material-ui icons
import Person from "@material-ui/icons/Person";
import Edit from "@material-ui/icons/Edit";
import Done from '@material-ui/icons/Done';
import Close from "@material-ui/icons/Close";
import Paper from "@material-ui/core/Paper";
import LinkIcon from '@material-ui/icons/Link';
// core components
import Table from "../../../material-components/Table/Table.jsx";
import Button from "../../../material-components/CustomButtons/Button.jsx";

import style from "../../../assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx";

import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';

import { deleteMatch } from '../../../actions';

const styles = theme => ({
    root: {
      width: "100%",
      marginTop: theme.spacing.unit * 3,
      overflowX: "auto"
    },
    input: {
        flex: 1,
        marginLeft: '30%',
        width: '28%'
    },
    table: {
      minWidth: 700
    },
    margin: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
    DeleteForever: {
        fontSize: '30px',
    },
  });
  

class MentorAssignments extends React.Component {
    state = {
        searchBarContents: '',
    }

    routeOnClick(id) {
        history.push(`/user/admin/mentorassignment/${id}/mentor`);
    }

    changeHandler = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    };

    deleteMatch = (e, matchId) => {
        e.preventDefault();
        this.props.deleteMatch(matchId);
    }

    filterBySearch = (role) => {
        const searchInput = this.state.searchBarContents.toLowerCase();
        const approvedMentors = this.props.users.filter(user => {
            return user.role === "MENTOR"
        });

        const filteredMentees = approvedMentors.filter(mentor => {
            return (
                mentor.last_name.toLowerCase().includes(searchInput) ||
                mentor.first_name.toLowerCase().includes(searchInput) ||
                mentor.email.toLowerCase().includes(searchInput)
            );
        });

        return filteredMentees;
    };

    clickHandler = (e, mentor) => {
        e.preventDefault();
        const clickedUser = this.props.users.filter(user => {
            return user.id == mentor.id;
        })[0];

        clickedUser.role = "MENTEE";
        
        this.props.updateUser(
            clickedUser.id, 
            {
                ...clickedUser
            }
        );
    }

    render() {
        const { classes } = this.props;
          
        return (
            <Paper className={classes.root}>
                {/* <InputBase className={classes.input} placeholder="Search Matches by Mentor" /> */}
                    <Input
                        placeholder="Search Matches by Mentor"
                        className={classes.input}
                        name='searchBarContents'
                        value={this.state.searchBarContents}
                        onChange={this.changeHandler}
                        inputProps={{
                            'aria-label': 'Description',
                        }}
                    />
                  <IconButton className={classes.iconButton} aria-label="Search">
                      <SearchIcon />
                  </IconButton>

                <Table
                    tableHead={[
                    " ",
                    "Last Name",
                    "First Name",
                    "Email",
                    "",
                    ]}
                    tableData={this.filterBySearch('mentor').map((mentor, index)=> {
                        return (
                            [
                                ' ', 
                                mentor.last_name, 
                                mentor.first_name, 
                                mentor.email,                                  
                                [
                                    <Button justIcon size="sm" color={"info"} onClick={() => this.routeOnClick(mentor.id)} >
                                        <Person />
                                    </Button>,
                                    <Button justIcon size="sm" color={"danger"} onClick={e => this.clickHandler(e, mentor)}>
                                        <Close />
                                    </Button>
                                ]
                            ]
                        )
                    })}
                />
            </Paper>
        );
    }
}

// MentorAssignList.propTypes = {
//     matchedUsers: PropTypes.array.isRequired
// };

export default connect(null, { updateUser })(withStyles(styles)(MentorAssignments));
