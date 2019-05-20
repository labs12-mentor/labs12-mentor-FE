import React from 'react';
import PropTypes from 'prop-types';
import history from '../../../history';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// material-ui icons
import Person from "@material-ui/icons/Person";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Paper from "@material-ui/core/Paper";
import LinkIcon from '@material-ui/icons/Link';

import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
// core components
import Table from "../../../material-components/Table/Table.jsx";
import Button from "../../../material-components/CustomButtons/Button.jsx";

import style from "../../../assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx";


import MentorApplicationCard from './MentorApplicationCard';

const styles = theme => ({
    root: {
      width: "100%",
      marginTop: theme.spacing.unit * 3,
      overflowX: "auto",
    },
    table: {
      minWidth: 700
    },
    input: {
        flex: 1,
        marginLeft: '30%',
        width: '28%'
    },
    iconButton: {
        padding: 10,   
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4,
    },
  });

class MentorApplications extends React.Component {
    state = {
        searchBarContents: ''
    }

    routeToApplication(id) {
        // history.push(`/user/admin/mentorapplication/${id}`);
    }

    changeHandler = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
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
        const fillButtons = [
          { color: "info", icon: Person },
          { color: "success", icon: Edit },
          { color: "danger", icon: Close }
        ].map((prop, key) => {
          return (
            <Button justIcon size="sm" color={prop.color} key={key}>
              <prop.icon />
            </Button>
          );
        });

        return (
            <Paper className={classes.root}>
                <Input
                    placeholder="Search Mentor Applications"
                    className={classes.input}
                    name='searchBarContents'
                    value={this.state.searchBarContents}
                    onChange={this.changeHandler}
                    inputProps={{ 'aria-label': 'Description', }}
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
                                <IconButton 
                                    style={{color: 'black'}} 
                                    className={classes.iconButton}
                                > 
                                    <LinkIcon /> 
                                </IconButton>, 
                                mentor.last_name, 
                                mentor.first_name, 
                                mentor.email, 
                                fillButtons
                            ]
                        )
                    })}
                />
            </Paper>
        );
    }
}

MentorApplications.propTypes = {
    mentors: PropTypes.array.isRequired
};

export default withStyles(styles)(MentorApplications);
