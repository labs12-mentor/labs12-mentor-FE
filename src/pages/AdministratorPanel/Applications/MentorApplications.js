import React from 'react';
import PropTypes from 'prop-types';
import history from '../../../history';
import { connect } from 'react-redux';
import { updateUser, deleteMentor } from '../../../actions';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// material-ui icons
import Person from "@material-ui/icons/Person";
import Done from "@material-ui/icons/Done";
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
      minWidth: 700,
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

    routeOnClick(id) {
        history.push(`/user/admin/mentorapplication/${id}`);
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

    clickHandler = (e, mentor, status) => {
        e.preventDefault();
        const clickedUser = this.props.users.filter(user => {
            return user.id == mentor.id;
        })[0];
        
        if(status === "approved"){
            clickedUser.role = "MENTOR";
            
            this.props.updateUser(
                clickedUser.id, 
                {
                    ...clickedUser
                }
            );
        } else if(status === "denied") {
            this.props.deleteMentor(mentor.mentor_id);
        }
        console.log('props check', this.props)
    }

    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.root}>
                <Input
                    placeholder="Search Mentor Applications"
                    className={classes.input}
                    name='searchBarContents'
                    value={this.state.searchBarContents}
                    onChange={this.changeHandler}
                    inputProps={{ 'aria-label': 'Description', }}
                    style={{
                        fontSize: '1.3rem',
                        width: '40%',
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
                                // <IconButton 
                                //     style={{color: 'black'}} 
                                //     className={classes.iconButton}
                                // > 
                                //     <LinkIcon /> 
                                // </IconButton>,
                                ' ',
                                mentor.last_name, 
                                mentor.first_name, 
                                mentor.email, 
                                [
                                    <Button justIcon size="sm" color={"info"} onClick={() => this.routeOnClick(mentor.id)}>
                                        <Person />
                                    </Button>,
                                    <Button justIcon size="sm" color={"success"} onClick={e => this.clickHandler(e, mentor, "approved")} >
                                        <Done />
                                    </Button>,
                                    <Button justIcon size="sm" color={"danger"} onClick={e => this.clickHandler(e, mentor, "denied")}>
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

MentorApplications.propTypes = {
    mentors: PropTypes.array.isRequired
};

export default connect(null, { updateUser, deleteMentor })(withStyles(styles)(MentorApplications));
